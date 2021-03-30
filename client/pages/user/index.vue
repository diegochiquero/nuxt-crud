<template>
  <div class="users">
    <v-container class="my-5">
      <v-data-table
        :headers="headers"
        :items="allUsers"
        sort-by="name"
        class="elevation-1"
      >
        <template #top>
          <v-toolbar flat>
            <v-toolbar-title>My CRUD</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialog" max-width="500px">
              <template #activator="{ on, attrs }">
                <v-btn
                  color="primary"
                  dark
                  class="mb-2"
                  v-bind="attrs"
                  v-on="on"
                >
                  New User
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="headline">{{ formTitle }}</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.username"
                          label="User name"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.email"
                          label="Email"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="close">
                    Cancel
                  </v-btn>
                  <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-dialog v-model="dialogDelete" max-width="500px">
              <v-card>
                <v-card-title class="headline"
                  >Are you sure you want to delete this user?</v-card-title
                >
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="closeDelete"
                    >Cancel</v-btn
                  >
                  <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                    >OK</v-btn
                  >
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
        <template #[`item.actions`]="{ item }">
          <v-icon small class="mr-2" color="blue" @click="editItem(item)">
            mdi-pencil
          </v-icon>
          <v-icon small color="pink" @click="deleteItem(item)">
            mdi-delete
          </v-icon>
        </template>
      </v-data-table>
    </v-container>
  </div>
</template>

<script>
import { /* mapState, */ mapGetters /*, mapActions */ } from 'vuex'

export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: 'Name',
        align: 'start',
        value: 'username',
        width: '40%'
      },
      { text: 'Email', value: 'email', width: '40%' },
      {
        text: 'Actions',
        value: 'actions',
        width: '20%',
        align: 'right',
        sortable: false
      }
    ],
    editedIndex: -1,
    editedItem: {
      username: '',
      email: ''
    },
    defaultItem: {
      username: '',
      email: ''
    }
  }),
  async fetch({ store, error }) {
    try {
      await store.dispatch('user/loadAllUsers')
    } catch (e) {
      error({
        statusCode: 503,
        message:
          'Unable to fetch event at this time. Please try again. USE TO THIS (i18n)'
      })
    }
  },
  head() {
    return {
      title: `${this.allUsers[0].username} - shown`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.allUsers[0]._id
        }
      ]
    }
  },
  computed: {
    // ...mapState('user', ['users']),
    ...mapGetters('user', ['allUsers']),
    formTitle() {
      return this.editedIndex === -1 ? 'New User' : 'Edit User'
    }
  },
  watch: {
    dialog(val) {
      val || this.close()
    },
    dialogDelete(val) {
      val || this.closeDelete()
    }
  },
  // created() {
  //   this.loadAllUsers()
  // },
  methods: {
    // ...mapActions('user', ['loadAllUsers']),
    editItem(item) {
      this.editedIndex = this.users.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem(item) {
      this.editedIndex = this.users.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm() {
      this.users.splice(this.editedIndex, 1)
      this.closeDelete()
    },

    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete() {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.users[this.editedIndex], this.editedItem)
      } else {
        this.users.push(this.editedItem)
      }
      this.close()
    }
  }
}
// "getters" is the same "computed" in vue and "state" is the same "data"
</script>

<style lang="scss" scoped></style>

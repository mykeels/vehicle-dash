<template>
  <div class="row" :class="componentName">
      <div class="col-sm-12" v-for="(note, index) in notes" :key="index">
          <div class="alert" :class="{
                                  'alert-success': types.success.includes(note.type),
                                  'alert-warning': types.warning.includes(note.type),
                                  'alert-info': !types.all().includes(note.type),
                                  'alert-danger': types.error.includes(note.type)
                              }">
              <slot :note="note">
                  {{note.text}}
              </slot>

              <span class="close" @click="note.close()">x</span>
          </div>
      </div>
  </div>
</template>

<script>
    import { EventBus } from '../../EventBus'

    export default {
        props: {
            name: String,
            reverse: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                notes: [],
                types: {
                    success: ['success'],
                    warning: ['warning', 'warn'],
                    error: ['danger', 'error'],
                    all () {
                        return [
                            ...this.success,
                            ...this.warning,
                            ...this.error
                        ]
                    }
                }
            }
        },
        computed: {
            componentName () {
                return `notifications${this.name ? '-' + this.name : ''}`;
            }
        },
        methods: {
            create(note) {
                console.log(note)
                if (note) {
                    const id = ((this.notes.map(note => note.id)[this.notes.length - 1] || 0) + 1)
                    const newNote = {
                        id,
                        type: note.type || 'success',
                        close: () => {
                            this.notes.splice(this.notes.findIndex(note => note.id === id), 1)
                        }
                    }
                    if (typeof(note) === 'string') {
                        newNote.text = note
                    }
                    else if (note.constructor.name === 'Object') {
                        Object.assign(newNote, note)
                    }
                    else {
                        newNote.data = note
                    }
                    if (!note.noTimeout) {
                        newNote.timeout = setTimeout(() => {
                            newNote.close()
                        }, note.interval || 15000)
                    }

                    if (!this.reverse) this.notes.push(newNote)
                    else this.notes.unshift(newNote)
                    return newNote
                }
                throw new Error('no note provided')
            },
            remove (id) {
                const note = this.notes.find(n => n.id === id)
                if (note) {
                    note.close()
                }
            }
        },
        mounted() {
            EventBus.$on(`${this.componentName}:create`, this.create)
            console.log(this.componentName)
        }
    }
</script>

<style>
    div.alert .close {
        cursor: pointer;
        margin-top: -2px;
        margin-left: 12px;
        font-size: 17px;
    }
</style>

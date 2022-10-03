<script>
    import axios from 'axios'
    
    export default {
        data() {
            return {
                chats: [],
                fabMessenger: true
            }
        },

        mounted() {
            axios.get('https://dummyjson.com/comments/')
            .then((response) => {
                this.chats = response.data.comments
            })
        },
    }
</script>

<template>
    <div class="container-fluid">
        <div class="position-fixed bottom-0 right-0 z-index-1">
            <button type="button" class="button-primary round mb-3 mx-5" @click="fabMessenger = !fabMessenger" v-if="fabMessenger"><span class="material-icons-outlined">chat</span> Messenger</button>
            <div class="fab-chat" v-else>
                <div class="background-accent-medium py-1 px-2 w-100 d-flex justify-content-end">
                    <button type="button" class="button-link-dark circle"><span class="material-icons-outlined">fullscreen</span></button>
                    <button type="button" class="button-link-dark circle" @click="fabMessenger = !fabMessenger"><span class="material-icons-outlined">close</span></button>
                </div>
                <div class="fab-messenger">
                    <div class="leftbar">
                        <div class="upper-state sticky-top py-2 px-3">
                            <div class="d-flex align-items-center gap-2 mb-2">
                                <div class="font-size-24 font-weight-600">Chats</div>
                            </div>
                            <div class="form-icon-group">
                                <span class="material-icons-outlined icon-search">search</span>
                                <input type="search" class="form-control round" placeholder="Search" autocomplete>
                            </div>
                        </div>
                        <div class="content-state list-group">

                            <a href="javascript:void(0);" class="list-group-item px-3 py-2" aria-hidden="true">
                                <div class="d-flex w-100 align-items-center gap-3">
                                    <div class="position-relative placeholder-glow">
                                        <div class="avatar-circle-sm placeholder"></div>
                                    </div>
                                    <div class="display-grid gap-2 placeholder-glow w-100">
                                        <div class="placeholder col-7"></div>
                                        <div class="placeholder col-12"></div>
                                    </div>
                                </div>
                            </a>
                            <template v-for="chat in chats">
                                <a href="#" class="list-group-item list-group-item-action px-3 py-2">
                                    <div class="d-flex w-100 align-items-center gap-3">
                                        <div class="position-relative">
                                            <img src="../assets/users/avatar.jpg" class="avatar-circle-sm" alt="">
                                        </div>
                                        <div class="display-grid">
                                            <div class="font-size-15 font-weight-600">{{ chat.user.username }}</div>
                                            <div class="font-size-13 d-flex gap-2">{{ chat.body }}<div class="font-weight-600">2:30pm</div></div>
                                        </div>
                                    </div>
                                    <!-- <div class="new-message-indicator"></div> -->
                                </a>
                            </template>
                        </div>
                    </div>
                    <div class="content">
                        <div class="top-wrapper sticky-top p-3 d-flex align-items-center justify-content-between">
                            <div class="d-flex align-items-center gap-2">
                                <img src="../assets/users/avatar.jpg" class="avatar-circle-xs" alt="">
                                <div class="font-size-16 font-weight-600">Rose Jovovich</div>
                            </div>
                            <div>
                                <button type="button" class="button-link-dark circle"><span class="material-icons-outlined">report</span></button>
                                <button type="button" class="button-link-dark circle"><span class="material-icons-outlined">delete</span></button>
                            </div>
                        </div>

                        <div class="conversation-wrapper p-4">
                            <!-- Empty State -->
                            <div class="empty-state-wrapper d-none">
                                <div class="empty-state-icon">
                                    <i class="bx bxs-message-square-dots"></i>
                                </div>
                                <div class="font-size-18 font-weight-600">It's nice to chat with someone</div>
                                <p>Pick a person from left menu and start conversation</p>
                            </div>
                            <!-- End: Empty State -->

                            <!-- Placeholder Loader -->
                            <div class="sender-wrapper placeholder-glow">
                                <div class="placeholder col-2"></div>
                                <div class="placeholder col-5"></div>
                                <div class="placeholder col-4"></div>
                                <div class="placeholder col-6"></div>
                                <div class="placeholder col-3"></div>
                            </div>
                            <div class="receiver-wrapper placeholder-glow">
                                <div class="placeholder col-2"></div>
                                <div class="placeholder col-5"></div>
                                <div class="placeholder col-7"></div>
                                <div class="placeholder col-1"></div>
                                <div class="placeholder col-4"></div>
                                <div class="placeholder col-5"></div>
                                <div class="placeholder col-6"></div>
                            </div>
                            <!-- End: Placeholder Loader -->

                            <!-- Conversation Bubbles -->
                            <div class="sender-wrapper">
                                <div class="sender">Hello</div>
                                <div class="sender">What is project proposal?</div>
                            </div>
                            <div class="receiver-wrapper">
                                <div class="receiver">Yes, how are you?</div>
                                <div class="receiver">Ok</div>
                                <div class="receiver">Did you get my email?</div>
                                <div class="receiver">I sent to you the file template for our project proposal.</div>
                                <div class="receiver">A project proposal is a 2-5 page document that seeks to address key questions surrounding a major project. A project proposal concisely describes what your project hopes to accomplish, why those objectives are important, and how you intend to achieve them. In more general terms, it makes a case for what you plan to do.</div>
                            </div>
                            <div class="sender-wrapper">
                                <div class="sender">Yes, i got it!</div>
                                <div class="sender">I'll review the file, thank you</div>
                            </div>
                            <div class="receiver-wrapper">
                                <div class="receiver">If you have questions just message me here</div>
                                <div class="receiver">By the way we will have a meeting with client tomorrow</div>
                                <div class="receiver">You can join the meeting</div>
                                <div class="receiver">Thanks</div>
                            </div>
                            <!-- End: Conversation Bubbles -->
                        </div>
                        <div class="bottom-wrapper sticky-bottom p-2">
                            <div class="d-flex align-items-center justify-content-between gap-2">
                                <div class="d-flex">
                                    <button type="button" class="button-link-dark circle"><span class="material-icons-outlined">attach_file</span></button>
                                    <button type="button" class="button-link-dark circle"><span class="material-icons-outlined">keyboard_voice</span></button>
                                    <button type="button" class="button-link-dark circle"><span class="material-icons-outlined">emoji_emotions</span></button>
                                </div>
                                <div class="message-wrapper">
                                    <div class="message-text" aria-placeholder="Aa" contenteditable="true"></div>
                                </div>
                                <button type="button" class="button-link-dark circle" id="send"><span class="material-icons-outlined">send</span></button>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </div>
</template>
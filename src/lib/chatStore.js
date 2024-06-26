
// import { create } from "zustand";
// import { useUserStore } from "./userStore";


// export const useChatStore = create((set) => ({
//   chatId:null, // unique id for the chat
//   user:null, 
//   isCurrentUserBlocked:false,
//   isReceiverBlocked:false,
  
//   // very important
//   // when we click on a specific user we retrieve
//   // the chat needed by the user using  this function
//   changeChat:(chatId,user)=>{
//     const currentUser = useUserStore.getState().currentUser // we get current user from 
//     // current storage

//     // check if current user is blocked
//     if(user.blocked.includes(currentUser.id)){
//         return set({
//             chatId,
//             user:null,
//             isCurrentUserBlocked:true,
//             isReceiverBlocked:false,
//         }) // check if receiver is blocked
//     }else if(currentUser.blocked.includes(user.id)){
//         return set({
//             chatId,
//             user:null,
//             isCurrentUserBlocked:false,
//             isReceiverBlocked:true,
//         })
//     }else{
//         return set({
//             chatId,
//             user,
//             isCurrentUserBlocked:false,
//             isReceiverBlocked:false,
//         })
//     }
//   },

//   changeBlock: () => {
//     set((state) => ({ ...state, isReceiverBlocked: !state.isReceiverBlocked }));
//   },
//   resetChat: () => {
//     set({
//       chatId: null,
//       user: null,
//       isCurrentUserBlocked: false,
//       isReceiverBlocked: false,
//     });
//   },



// }));


import { create } from "zustand";
import { useUserStore } from "./userStore";

export const useChatStore = create((set) => ({
  chatId: null,
  user: null,
  isCurrentUserBlocked: false,
  isReceiverBlocked: false,
  changeChat: (chatId, user) => {
    const currentUser = useUserStore.getState().currentUser;

    // CHECK IF CURRENT USER IS BLOCKED
    if (user.blocked.includes(currentUser.id)) {
      return set({
        chatId,
        user: null,
        isCurrentUserBlocked: true,
        isReceiverBlocked: false,
      });
    }

    // CHECK IF RECEIVER IS BLOCKED
    else if (currentUser.blocked.includes(user.id)) {
      return set({
        chatId,
        user: user,
        isCurrentUserBlocked: false,
        isReceiverBlocked: true,
      });
    } else {
      return set({
        chatId,
        user,
        isCurrentUserBlocked: false,
        isReceiverBlocked: false,
      });
    }
  },

  changeBlock: () => {
    set((state) => ({ ...state, isReceiverBlocked: !state.isReceiverBlocked }));
  },
  resetChat: () => {
    set({
      chatId: null,
      user: null,
      isCurrentUserBlocked: false,
      isReceiverBlocked: false,
    });
  },
}));
export async function getDictionary() {
  return {
    profile: {
      account: {
        title: 'Account',
        items: {
          updates: 'Updates',
          messages: 'Messages',
          tasks: 'Tasks',
          comments: 'Comments',
        },
      },
      settings: {
        title: 'Settings',
        items: {
          profile: 'Profile',
          settings: 'Settings',
          payments: 'Payments',
        },
      },
      lock_account: 'Lock account',
      logout: 'Logout',
    },
  };
}




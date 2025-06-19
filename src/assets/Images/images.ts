export const getImage = (name: string, theme?: 'light' | 'dark' | null) => {
  const validTheme: 'light' | 'dark' = theme === 'dark' ? 'dark' : 'light';

  const images = {
    google: require('./google.png'),
    gradientBg: require('./gradientBg.png'),
    email: require('./email.png'),
    lock: require('./lock.png'),
    check: require('./check.png'),
    cross: require('./cross.png'),
    food: require('./food.png'),

    notification: require('./notification.png'),
    smsNotification: require('./smsNotification.png'),
    perks: require('./perks.png'),
    schedule: require('./schedule.png'),
    workouts: require('./workouts.png'),
    splashLogo: require('./splashLogo.png'),
    splashBg: require('./splashBg.png'),
    home: require('./home.png'),
    more: require('./more.png'),
    post: require('./post.png'),
    comment: require('./comment.png'),
    profile: require('./profile.png'),
    chevronDown: require('./chevronDown.png'),
    manage: require('./manage.png'),
    clock: require('./clock.png'),
    calendar: require('./calendar.png'),
    stopWatch: require('./Stop-watch.png'),
    time: require('./time.png'),
    lockStage: require('./LockStage.png'),
    city: require('./city.png'),
    age: require('./age.png'),
    ageOfHistory: require('./ageOfHistory.png'),
    weight: require('./weight.png'),
    faceId: require('./faceId.png'),
    sadEmoji: require('./sadEmoji.png'),
    gender: require('./gender.png'),
    checkEmail:
      validTheme === 'dark'
        ? require('./checkEmail.png')
        : require('./checkEmailDM.png'),
    state: require('./state.png'),
    kcal: require('./kcal.png'),
    authBg:
      validTheme === 'dark'
        ? require('./gradientBg.png')
        : require('./authLMainBg.png'),
    logo:
      validTheme === 'dark'
        ? require('./darkLogo.png')
        : require('./lightLogo.png'),

    fullLogo:
      validTheme === 'dark'
        ? require('./fullLogo.png')
        : require('./fullLogoDark.png'),
    splash:
      validTheme === 'dark'
        ? require('./splashDark.png')
        : require('./splashLight.png'),
    header:
      validTheme === 'dark'
        ? require('./headerLight.png')
        : require('./headerDark.png'),
    leftArrow:
      validTheme === 'dark'
        ? require('./darkModeChevron.png')
        : require('./lightModeChevron.png'),
  };

  return images[name as keyof typeof images] || null;
};

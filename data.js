// small inline SVG placeholder avatar (data URI)
const DEFAULT_AVATAR = "data:image/svg+xml;utf8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='80'%20height='80'%3E%3Crect%20fill='%23cccccc'%20width='100%25'%20height='100%25'/%3E%3Ctext%20x='50%25'%20y='50%25'%20dominant-baseline='middle'%20text-anchor='middle'%20font-size='30'%20fill='%23000000'%3ET%3C/text%3E%3C/svg%3E";

export const tweetsData = [   
    {
        handle: `@TrollBot66756542 💎`,
    profilePic: DEFAULT_AVATAR,
        likes: 27,
        retweets: 10,
        tweetText: `Buy Bitcoin, ETH Make 💰💰💰 low low prices. 
            Guaranteed return on investment. HMU DMs open!!`,
        replies: [],
        isLiked: false,
        isRetweeted: false,
        uuid: '4b161eee-c0f5-4545-9c4b-8562944223ee',
    },    
    {
        handle: `@Elon ✅`,
    profilePic: DEFAULT_AVATAR,
        likes: 6500,
        retweets: 234,
        tweetText: `I need volunteers for a one-way mission to Mars 🪐. No experience necessary🚀`,
        replies: [
                  {
                handle: `@TomCruise ✅`,
                profilePic: DEFAULT_AVATAR,
                tweetText: `Yes! Sign me up! 😎🛩`,
            },
                  {
                handle: `@ChuckNorris ✅`,
                profilePic: DEFAULT_AVATAR,
                tweetText: `I went last year😴`,
            },
        ],
        isLiked: false,
        isRetweeted: false,
        uuid: '3c23454ee-c0f5-9g9g-9c4b-77835tgs2',
    },
        {
        handle: `@NoobCoder12`,
    profilePic: DEFAULT_AVATAR,
        likes: 10,
        retweets: 3,
        tweetText: `Are you a coder if you only know HTML?`,
        replies: [
            {
                handle: `@StackOverflower ☣️`,
                profilePic: DEFAULT_AVATAR,
                tweetText: `No. Obviosuly not. Go get a job in McDonald's.`,
            },
            {
                handle: `@YummyCoder64`,
                profilePic: DEFAULT_AVATAR,
                tweetText: `You are wonderful just as you are! ❤️`,
            },
        ],
        isLiked: false,
        isRetweeted: false,
        uuid: '8hy671sff-c0f5-4545-9c4b-1237gyys45',
    },     
]
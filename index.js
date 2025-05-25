import { tweetsData } from "./data.js";
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';



const tweetFeed = document.getElementById("feed")
const tweetInput = document.getElementById("tweet-input")



document.addEventListener('click', function(e){
    
    if(e.target.dataset.like){
        handleLikeClick(e.target.dataset.like)
    }
    if(e.target.dataset.retweet){
        handleRetweetClick(e.target.dataset.retweet)
    }
    if(e.target.dataset.reply){
        handleReplyClick(e.target.dataset.reply)
    }
    if(e.target.id === 'tweet-btn'){
        handleTweetSubmit(e.target.id)
    }
})

function saveToLocalStorage(){
    localStorage.setItem('tweetsData', JSON.stringify(tweetsData))
}
saveToLocalStorage()




function handleTweetSubmit(){
    if(tweetInput.value){
        tweetsData.unshift({
            handle: `@Terry`,
            profilePic: `images/Mine.jpeg`,
            likes: 0,
            retweets: 0,
            tweetText: tweetInput.value,
            replies: [],
            isLiked: false,
            isRetweeted: false,
            uuid: uuidv4(),
        })
        tweetInput.value = ''
        renderTweets()
        saveToLocalStorage()
    }

}

function handleReplyClick(tweetId){
    document.getElementById(`replies-${tweetId}`).classList.toggle('hidden')
    const replySection = document.getElementById(`replies-${tweetId}`)
    replySection.innerHTML += `
    <textarea id="reply-input-${tweetId}" class="reply-input" placeholder="Reply to this tweet.."></textarea>
    <button id="reply-btn-${tweetId}" class="reply-btn">Reply</button>
    `;
    
}

function handleLikeClick(tweetId){
    const targetTweetObj = tweetsData.filter(function(tweet){
        return tweet.uuid === tweetId
    })[0]
   
    if(targetTweetObj.isLiked){
        targetTweetObj.likes--

    }
    else{
        targetTweetObj.likes++
    }
    targetTweetObj.isLiked = !targetTweetObj.isLiked

    renderTweets()
    
    saveToLocalStorage()

    

}

function handleRetweetClick(tweetId){
    const retweetObj = tweetsData.filter(function(retweet){
        return retweet.uuid === tweetId
    })[0]

    if(retweetObj.isRetweeted){
        retweetObj.retweets--
    }
    else{
        retweetObj.retweets++
    }
    retweetObj.isRetweeted = !retweetObj.isRetweeted
    renderTweets()
    saveToLocalStorage()
    }


//call html into the feed
function getHtml(){
    let feedhtml = ``;

    tweetsData.forEach(function(tweet){
        let retweetIcon = ''
        let likeIcon = ''
        let repliesHtml = ''
        if(tweet.isLiked){
            likeIcon = 'liked'
        }
        if(tweet.isRetweeted){
            retweetIcon = 'retweeted'
        }
        if(tweet.replies.length > 0){
            tweet.replies.forEach(function(reply){
                repliesHtml += `<div class="tweet-reply">
                                    <div class="tweet-inner">
                                        <img src="${reply.profilePic}" class="profile-pic">
                                        <div>
                                         <p class="handle">${reply.handle}</p>
                                         <p class="tweet-text">${reply.tweetText}</p>
                                        </div>
                                     </div>
                                </div>`
            return repliesHtml

        })
    }

        feedhtml += `
        <div class="tweet">
    <div class="tweet-inner">
        <img src="${tweet.profilePic}" class="profile-pic">
    <div>
            <p class="handle">${tweet.handle}</p>
            <p class="tweet-text">${tweet.tweetText}</p>
            <div class="tweet-details">
                <span class="tweet-detail">
                <i class="fa-solid fa-comment-dots" data-reply=${tweet.uuid}></i>
                    ${tweet.replies.length}
                </span>
                <span class="tweet-detail">
                <i class="fa-solid fa-heart ${likeIcon}" data-like=${tweet.uuid}></i>
                    ${tweet.likes}
                </span>
                <span class="tweet-detail">
                <i class="fa-solid fa-retweet ${retweetIcon}" data-retweet=${tweet.uuid}></i>
                     ${tweet.retweets}
                </span>
            </div>   
        </div>           
    </div>
    <div id="replies-${tweet.uuid}" >
        ${repliesHtml}
    </div>
</div>

              `
      
      
 
});
return feedhtml;
}


//render out the text to the html using feed

function renderTweets(){

    tweetFeed.innerHTML = getHtml()
}
renderTweets()


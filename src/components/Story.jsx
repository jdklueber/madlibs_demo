function Story({story}) {
    return(
        <div>
            <p>Once upon a time, <span className="underline text-xl">{story.character}</span> lived in an old and smelly {story.setting}.  He/she wanted to go somewhere exciting, 
               so he/she planned a trip to {story.place}.  But then, {story.problem}.
               {story.character} was very {story.adj1} and {story.adj2},
               so, he/she had to do Something!!
               So he/she {story.action}.  After he/she did this, {story.result}. 
               And {story.character} lived happily ever after.
               </p>
        </div>
    );
}

export default Story;
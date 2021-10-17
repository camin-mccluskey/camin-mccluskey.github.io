# Helpful Machines 

## Introduction 

I was struck by this notion as I was typing on [Monkey Type](https://monkeytype.com), how could a machine help me improve my typing speed. On a superficial level, certainly there are letters I miss more frequently than others, perhaps certain 2 letter combinations I struggle to hit consistently. Perhaps entire words I mess up. But surely there is a deeper level of understanding that could be leveraged to improve my typing? 

What makes words, keys, combinations "like" others in the set of word, keys, combinations that I miss? 

**Initial Thoughts**
1. I've leveraged human understanding of the situation to chose these 3 categories of interest. A computer would only see a string of characters (some hit, some missed). 
2. This seems like a task for machine learning. Predict which characters (and which order) are likely to result in misses and generate phrases that include those characters in that order 
3. How extensible is this notion of "sameness in the poor performance set" to other domains?

nb. Maybe this entire concept exists in the machine learning literature. 

## Exploration

Effectively I am much less interested in exploring how to be a faster typer than I am in becoming a better anything. Moreover, my real interest lies in understanding, not how to practice better, but what exactly **to practice**.

## How do we improve?

There is a wealth of literature in this domain. What I've observed is that there is plenty of technology, content and literature that focuses on techniques to practice knowledge retrieval (spaced repetition, multi-modal learning etc). However, what I want to investigate is this - how do we even know what data it is that we need to retrieve.

Clearly we should practice that which we forget. However in some situations, it is unclear what we are forgetting because:
1. It's not clear what the correct unit of evaluation (e.g. word, char, sequence)
2. The act of practicing the unit of mistake wouldn't be effective (e.g. practicing a single sequence without context is likely to be ineffective) 
3. The act of practising what we forget would be ineffectual because we might never encounter the situation again, only situations "like" it.

* we're using __forget__ here to mean both forget, mistake, etc 

## Generalised Concept 

When we perform a task we are actually preforming some sequence of actions. Let's first assume that the evaluation of each action is independent of the last (action independence), that each action can indeed be evaluated (action evaluability), and overall task performance is completely determined by the summation of action correctness (action completeness). When we conceptualise the task like this, we realise that many tasks fit the description. Playing the piano is just hitting one correct note after another, accounting for time (which might be conceptualised as hitting no note). Playing a perfect game of chess is playing the correct sequence of moves and juggling is moving your hands to the correct position at the correct time. In this way, do we run the risk of over simplifying the situation? Obviously some tasks are dependent on external stimulus, such as what your opponent plays, or on some randomness that isn't completely knowable or perceptable such as the air in the room slightly affecting the flight of the juggling ball. It would appear we have 2 classes of tasks 

__I think that maybe independence and completeness are poor terms, since what we're trying to say is that the performance evaluation for a given action is independent and the overall performance is completely knowable from action performance evaluation.__

What about juggling? Is that simply moving your hands to the correct place at the correct time, to both throw and catch the balls? No, I would argue that it breaks action transparency and independence. Any throw upwards is valid (correct), so it's not clear how to evaluate each successive action.

1. Constant translation tasks -> input symbol, output action (letter, keypress or written note, piano key press)
2. Variable translation tasks -> input symbol, ?

// I think this is an incorrect mental model
// What makes typing with perfect accuracy at high speed different from playing a "perfect" game of chess? - In each case there is a sequence of actions which fit the assumptions above. Intuitively it feels different in the input space. Examining the typing case, you might imagine that one performs a series of typing "tests": where a sequence of words appear and the agent has to hit to correct key on the keyboard, in the correct order. Assuming that speed doesn't matter, task performance is the total number of correct keypresses over the total number of keypresses. In a game of chees, we can judge the correctness of a move by comparing the evaluation with the theoretical maximum of all the moves (as calculated by a chess engine). Task performance here is the average delta between the agents move and the theoretical maximum move. In the former, the size of the input space is just 26 (excluding puncutation, numbers etc), in the latter it is practically infinite.

In both scenarios it would be helpful to practice inputs that cause poor action performance. E.g. I have major trouble hitting the 'Y' key consistently because I switch which index finger I cross to hit it with. With chess, there are certainly positions I have played poorly, however I may never find myself in that position again until the end of time (indeed no one in history may have found, or will ever find, themselves in that position).

## Handling Input Complexity

 
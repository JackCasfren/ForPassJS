# ForPassJS

## Setup:

Just extract the folder, and click on "index.html"
And that is about it.

to be safer, we recomend going to the browser developer console and disable networking.
you can do this by doing right click inspect element.
the navigate to the network tab, and the dropdown menu that says "no trottle" change that to "offline".
Afaik, this will not allow any out going packages, so if anyone made a malicious version of this software, you password won't be able to be leaked.

## Developer setup:

Super simple, I run idx, just live server plugin, and click start. (i also use better comments plugin and the markdown all in one plugin)


# What is a formula based password?
A formula based password is a type of password structure that is calculated when it is presented in a login page.

Example: You want to login into [Framework's website](https://frame.work). 
You know a number of things about this login, like the color of the logo, the name, the shape of the logo, etc.
Based on this you can consult your formula and know your what is your password.
Let's say your passwords formula is the following:
> The shape of the logo + 2 colors of the company (Starting with Caps) + the year this project started.

The result would be: 
> "cogBlackGray2024"

(This is an example, as this is a terrible password)
Although, https://www.passwordmonster.com/ says it would take 333y to crack. I don't know how reliable this page is.

Making password formulas and calculating them can be hard.

Making a software that can assist you is the best option (would be awesome if in the future was implemented in KeePass, vaultwarden/Bitwarden, etc...)

## The Philosophy inside Formula based passwords:
They are complementary to password managers, or simple passwords in general.
Instead of having to make something up on the spot, apply the formula you have designated to that area of your life.

1. The formula must be hard enough to make reverse engineering impossible. If a threat actor manages to get the resulting password, the formula should not be discovered.
2. The formula can be made easy to remember, so in a pickle the password can be applied and aqquired.
3. The formula must be ____ (insert thing here, I can't remember, I think just having two options here feels weak).

## ForPass Accesibility

The code must be vanilla TS.
Self-hosting of the tool and allowing the users to use it without external tools is critical.
A simple double click on index.html should do the job.

Also so I can understand it.









## Far fetched to-do

- [] Finish the beta
- [] Have a website that hosted a beta
- [] Integrate with other services
- [] Be adopted as a better standard
- [] Tests?


## Comment on IBM's password making video.
https://www.youtube.com/watch?v=xUp5S0nBnfc

TLDR: the Video c
discusses some research into what makes an affective password.They mention characteristics that they consider counter productive, and one of them are formulas, a batter name would be requirements.
> "a formula(requirement) you had to follow, mixture of upper and lower case letters, numbers, special characters things like that [...] users end up with passwords they can't remember."

Requirements do increase the strenght of the password, so having them is a plus.
Just include them in your formula. idk, put 1 "?" between every word. (cog?Black?Gray?2024? -> 27 billion years lol)

Then they proceed to mention:



This is the relevant transcript:
> ...and what that does in combination with an expiration date is make it so that users end up with passwords they can't remember.

I do agree that exipirations are not a great idea, but simply using symbols is not their fault.

> And if they can't remember them, then they have to write them down.
> And if we make them change them a lot, then they've really got to write them down.
> So instead of the old rules of a formula and expiration, in fact, the new guidance is that we should look at at length.
> Length is strength.

I know, that is why the formulas can have many repeating values in asimetric ways, making them extendeble but not hard to remeber.

I agree with the rest of things.






## Regrets

I stupidly belive that this could be a manageble task, i have not coded in a while in javascript so lets see how it goes.



# ForPassJS

## TLDR What is ForPassJS?

Software for Creating and Resolving Password Formulas.
# What is a formula based password?
A formula based password is a form of password one that calculate once they are presented with a login page.

e.g : You want to login into frame.work's website. 
You know a series of things about this login, the color of the logo, the name, the shape of the logo.
Based on this you consult your formula and you know your what your password is.
Lets say your passwords formula says the following:
> Get the shape of the logo + and add the 2 colors of the company(starts with caps) + the year this project started.

The result would be: 
> "cogBlackGray2024"

(this is a terrible password, but it is to give the idea on how to use it)
Althogh, https://www.passwordmonster.com/ says it would take 333y to crack. I don't know how reliable this page is.

Making these password formulas can be hard, and calculating them too can be hard.

Making a software that can asist you is ideal. ( would be awesome if it would be iplemented in keepass,vault warden, etc...)

## The Philosophy of Formula based passwords:
They are a complement to password managers, or simple passwords in general.
Intead of having to make something up on the spot, apply the formula you have designated to that area of your life.

1. The formula Must be hard enough to not be able to reverse engineer. If a threat actor manages to the resulting password, the formula should not be discovered.
2. The formula can be made easy to remeber, so in a pickle the password can be aplied and the password aquired.
3. The formula must be ____ (insert thing here, i can't remeber, i think just having two options here is weak).

## ForPass Accesability

The code must be vanilla TS.
Allowing users to download the code and use it without external tools and offline is critical.
A simple double click on index.html should do the job.

Also so I can understand it.









## Far fetched to-do

Finish the beta
Have a website that hosted a beta
Integrate with other services
Be adopted as a better standard
Tests?


## Coment on IBM's password making video.
https://www.youtube.com/watch?v=xUp5S0nBnfc

Two columns are made 2 on the left with things that should not be considered any more:
>"formulas"(which im going to call "Requirements"), i quote: "a formula you had to follow, mixture of upper and lower case letters, numbers, special characters things like that"

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

with the rest of things i agree with.






## Regrets

I stupidly belive that this could be a manageble task, i have not coded in a while in javascript so lets see how it goes.



# Bob's Portfolio
  This is my portfolio web site. It started it as a multipage static website but I desired to stretch myself so I decided to convert the project into a MEAN stack application. This proved to be quite a challenge but it was worth it to further my knowledge of this popular technology that we only covered for one day in the bootcamp. My reasons for choosing the MEAN stack was to try to make a true single page application.
  
  I enjoy having fun with the styling so I gave it a playful yet polished look - and I desired to have a fixed navigation bar that would unify the site - despite the varied backgrounds of the different "views". I wanted it to link to my various business social media so I added a contact page and had it open in a new tab so my site wouldn't get lost. I also added a cool g-mail link that opens up a new mail entry and fills in the subject so that visitors can contact me easily. I also thought it would be neat to show some of my artwork and utilize some of angular's two way data-binding to make sorting by likes happen in real time. Finally, I wanted to have my resume available in a pdf format so that potential employers could see it and print it out if they desired.
  
  Since the MEAN stack was going to be a challenge, I git added and git committed fairly frequently and made use of branches. I started with a simple concept and then added features. I found trying to access data from a nested loop very difficult and spent many hours trying to come up with an adequate solution. I was able to add a list of comments to each artwork, but could not get the form to add a new comment to properly submit. There is a problem with scope when in a nested ng-repeat. It was frustrating because I could pass the proper art object and the list of comments to the addComment function in my controller but the ng-model from the form would just show up as undefined. I tried many different methods of constructing the input field (ng-form, regular form with ng-click, ajax requests, etc) but was unable to get the data. There must be a way to do this because it seems like a common way of data entry. Due to time constraints, I had to take off the comment feature, but will definitely continue to work on it.
  
  Technologies used on this site:
  
    Mongoose to set up a schema for the MongoDb
    MongoLab to help manage the database
    Express to help set up a basic template of files for the NodeJs application
    AngjularJs to set up a frontend framework
    NodeJs to use javascript on the backend for server side functions
    Preview to crop photos taken of my artwork
    Html to display my views
    CSS to help with styling and to make the site responsive to the size of the viewport
    Bootstrap - to help with visual organization of the viewport
    

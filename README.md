# Lobola Insurance

Lobola is traditional Southern African custom in which a man pays a bride price--usually in the form of cattle or money--to the family of the woman he wishes to marry. It is practiced in several cultures. This site hopes to help many people from going into debt or borrowing money to pay lobola. Insurance helps reduce the financial risk and provides peace of mind during a culturally important but expensive process. The site is mainly targeting people who wish to marry and yet can't afford. The site does not only offer insurance, but also a platform where members can share content of their Lobola events, other members can read, and comment on the content shared. This insurance app is not only targeted at South Africans, but the world as it keeps diversing. There are people who go into multiracial marriages, due to traveling a lot. So when people learn about customs and cultures of South Africa, then they will find this insurance app useful.

![hero home page](image.png)

## Features Backend

### Backend Deployement
* Create a database
* On settings in the Heroku app, add a Config Var DATABASE_URL and paste in the database URL
* Set up my project to connect to my PostgreSQL from Code Institute database
* Create a superuser
* Install package needed to run the project on Heroku
* Fix a few environment variables
* Create a Procfile file that will provide the commands to Heroku to build and run the project
* On Heroku settings, added two more Config Vars: CLOUDINARY_URL and SECRET_KEY
* Connect Heroku to GitHub
* Deploy project.


## Features Frontend

### Navigation Bar
- When a user is not yet logged in, the below is what the navigation bar looks like.
- It consists of a logo (a cow's head with Lobola Insurance written on it on a white background)

![navbar !loggedin](image-1.png)

- When a user is signed in, the navigation bar shows more links/ pages. Please see below:

![navbar loggedin](image-6.png)

### The home page
- This includes a photograph of for men (uncles) negotiating the price for the Lobola
- On the the image is a text overlay which attracts the user to browse through the site
- Below the text are two buttons, one to get a quote of the insurance offered, and the other is to learn more about the site. Please see image below:

![hero image](image-2.png)

- When a user clicks the 'Get a Quote' button, they are able to view the quotes we offer. Please see below:

![quote](image-4.png)

- The 'Learn More' button shows more information about the insurance site. Please see below:

![learn more](image-5.png)

#### How it works section
- Below the landing image is a section that tells user what the insurance offeres
- It is just a brief explanation of what is included. Please see below:

![how it works section](image-3.png)

### Add post feature
- A user can upload an image of choice to share their big day.
- A user is able to create posts in order to share with others. Please see below:

![add post](image-7.png)

### The post page
- Here users are able to view the most recent posts.
- On this page, one  can view the most followed profiles.
- Users are able to like other people's posts and comment on them.
- Users are able to see our customers in action and see how the insurance had helped them with arranging their lobola and/ weddings. Please see below:

![post page](image-8.png)

#### Comment section
- A user is able to comment on a post
- They can also edit and delete their comment by clicking the Kebab Menu for the options. Please see below image:

![comment section](image-9.png)

### Sign In Page
* A user is then prompted to sign in if the have already been able to signup
* A beautiful image of rings shows what the the user is getting themselves into

![Sign In page](readme.docs/signin.png)

### Sign Up Page
* If a user has not signed yet, they can simply signup to be a part of the community. Please see image below:

![Sign Up page](readme.docs/signup.png)




### Features Left To Implement
* When a user clicks on the "Get a Quote" button, they should be redirected to a Coverage plans page where they can select the type of plan they want to get for their ceremony.
* The "Learn more" button should redirect a user to a page where they can learn more about the app.
* Create terms and conditions regarding payouts
* On the Home Page, I would like to add more details regarding the insurance I offer

## Testing

### Manual Testing Frontend
* When a user tries to submit an empty signin/signup form, the form is defensive. Users have to complete all fields. Please see image below:
![Defensive Form](readme.docs/defensive-form.png)



### Validator Testing



### Unfixed Bugs

* When I access the app, before I signin or click any button I get the below errors on dev tools. The default profile image is not readable. Please see image below:

![Dev Tools](readme.docs/console.png)


## Deployement
* I followed the Advanced Front End: Deployement of both applications instructions
* The guide assisted in deploying both my React front-end project and my Django API backend as both projects were combined in one workspace.
* Setting up WhiteNoise for static files
* Add route to serve the index template
* Combining both Django and React static files and compiling them
* Add runtime.txt file to ensure Heroku uses the correct version of Python to deploy my project
* Test functionality of the URL
* On the Heroku App, inside Settings, add ALLOWED_HOST and CLIENT_ORIGIN inside Config Vars
* Go to Deploy page and deploy my project.


## Credits

### Content
* Sarah, a Tutor of CI, helped me with the sign out link. I could not sign out once signed in, and Sarah helped me find my way to fixing the issue.
* I have issues with the URLS. A couple of tutors tried to help me position the URL's at the right places namely: Rebecca, Sarah, Roman
* Oisin, a Tutor of CI, helped me with getting my workspaces set up as I was struggling with the commands given to set it up.
* The Moments Walkthrough helped me set up my workspaces and also with the content.


### Media
* The images used on this app are taken from various sites: ChatGPT, [Pixabay]https://pixabay.com/images/search/cow%20with%20rings%20%20logo/
* The logo image used is taken from [ChatGPT]https://chatgpt.com/s/m_6821d556cde88191b13fd8483534c194




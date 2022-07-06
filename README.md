# Multi-step form

This is a multi-step form that moves to the next page using pagination. Five buttons are reponsible for pagination:

 - Start Survey : begins the survey and navigates from the default page.
 - Next : navigates to the next page starting from the second to the fifth page.
 - Finish : this leads the user to the score board.
 - Start New: this creates a submit effect which triggers a reset of the form
 - Back : this is used to navigate to previous pages in the form
 
 This app was built with a combination of React class and functional components. The individual pages involved in the multi-step 
 are built with functional components - using props from the class component as argument, so that when called in the Parent node - the class component - 
 all the states are parsed.
 
 The main functions driving this multi-step behaviour are the:
 
 - Next page function
 - Previous page function

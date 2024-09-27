# WiseChoice
Your Intelligent Shopping Companion


WiseChoice is primarily designed to eliminate the "Analysis Paralysis" problem that an e-commerce shopper often faces during decision-making about a product. It is believed that this paralysis occurs due to two main reasons:

There is uncertainty regarding the quality of the product under consideration.

There are doubts about the fairness of the current price.

To address these challenges, WiseChoice harnesses the power of machine learning, deep learning, and natural language processing.

1.Evaluating Product Quality
To determine the quality of a product, reviews associated with the product are to be extensively analyzed. However, reviews present their own set of challenges:

The sheer volume of reviews for each product can be overwhelming.

The presence of fake reviews, which can be categorized into:

i) Computer-generated reviews that mimic genuine feedback.

ii) Paid reviews intended to artificially boost ratings

WiseChoice uses advanced algorithms to sift through the vast number of reviews, identifying genuine feedback while filtering out fake reviews. This helps provide a clearer and more accurate assessment of the product's quality.

It is acheived by :

1. Eliminating Fake computer generated reviews
2. Detecting Paid Reviews
3. Evaluating Price Fairness

For more information regarding the Project, visit : https://techwithnikith.hashnode.dev/wisechoice-an-intelligent-shopping-companion-for-smart-decision-making


SETUP

Firstly prerequesities are : 
1) python (above 3.10) and Node (npm) should be installed and added to PATH variables.
2) No need for GPU but atleast 8GB RAM is necessary.

to setup the Project Wisechoice in your system, you only need to follow 3 steps.

1) Clone the Repository

2) Run the setup.py file to install dependencies. run it manually or paste the following command in your terminal

        python setup.py

3) Download the joblib file from below link and place it in backend-server directory

        https://drive.google.com/drive/u/1/folders/1z2MCfuIaRLS6kblz7E4uj6P-4IXmdHqv


Now the setup is done. To run the Application,

1) Run the following commands to start backend server

        cd backend-server
        python app.py

2) Open another terminal or command prompt and run the following commands to start react UI

        cd frontend-UI
        npm run dev

    then after a while it says ready and provides a link 'http://localhost:3000'. navigate to that link from a browser to use the application.



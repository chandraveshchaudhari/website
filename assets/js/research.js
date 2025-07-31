/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Stock Market Prediction Techniques Using Artificial Intelligence: A Systematic Review",
    authors:
      "Chandravesh Chaudhari, Geetanjali Purswani",
    conferences:
      "Congress on Intelligent Systems, Springer Nature Singapore",
    researchYr: 2022,
    citebox: "popup1",
    image: "assets/images/research-page/review_paper.png",
    citation: {
      vancouver:
        "Chaudhari, C., Purswani, G. (2023). Stock Market Prediction Techniques Using Artificial Intelligence: A Systematic Review. In: Kumar, S., Sharma, H., Balachandran, K., Kim, J.H., Bansal, J.C. (eds) Third Congress on Intelligent Systems. CIS 2022. Lecture Notes in Networks and Systems, vol 608. Springer, Singapore. https://doi.org/10.1007/978-981-19-9225-4_17",
    },
    abstract:
      "This paper systematically reviews the literature related to stock price prediction systems. The reviewers collected 6222 research works from 12 databases. The reviewers reviewed the full-text of 10 studies in preliminary search and 70 studies selected based on PRISMA. This paper uses the PRISMA-based Python framework systematic-reviewpy to conduct this systematic review and browser-automationpy to automate downloading of full-texts. The programming code with comprehensive documentation, citation data, input variables, and reviews spreadsheets is provided, making this review replicable, open-source, and free from human errors in selecting studies. The reviewed literature is categorized based on type of prediction systems to demonstrate the evolution of techniques and research gaps. The reviewed literature is 7 % statistical, 9% machine learning, 23% deep learning, 20% hybrid, 25% combination of machine learning and deep learning, and 14% studies explore multiple categories of techniques. This review provides detailed information on prediction techniques, competitor techniques, performance metrics, input variables, data timing, and research gap to enable researchers to create prediction systems per technique category. The review showed that stock trading data is most used and collected from Yahoo! Finance. Studies showed that sentiment data improved stock prediction, and most papers used tweets from Twitter. Most of the reviewed studies showed significant improvements in predictions to previous systems.\n",
    absbox: "absPopup1",
  },

  {
    title: "Hybrid Subset Feature Selection And Importance Framework",
    authors:
      "Chandravesh Chaudhari, Geetanjali Purswani",
    conferences:
      "2023 IEEE International Conference on Contemporary Computing and Communications (InC4), Bangalore, India, 2023",
    researchYr: 2020,
    citebox: "popup2",
    image: "assets/images/research-page/subset.png",
    citation: {
      vancouver:
        "C. Chaudhari and G. Purswani, \"Hybrid Subset Feature Selection And Importance Framework,\" 2023 IEEE International Conference on Contemporary Computing and Communications (InC4), Bangalore, India, 2023, pp. 1-6, doi: 10.1109/InC457730.2023.10262828. keywords: {Training;Pipelines;Predictive models;Feature extraction;Prediction algorithms;Inference algorithms;Stock markets;Feature Importance;Feature Selection;Stock Market;Artificial Intelligence;supervised learning;feature-selectionpy},\n" ,
    },
    abstract:
      "Feature selection algorithms are used in high-dimensional data to remove noise, reduce model overfitting, training and inference time, and get the importance of features. Features subset selection is choosing the subset with the best performance. This research provides a Hybrid subset feature selection and importance (HSFSI) framework that provides a pipeline with customization for choosing feature selection algorithms. The authors propose a hybrid algorithm in the HSFSI framework to select the best possible subset using an efficient exhaustive search. The framework is tested using the Bombay stock exchange IT index’s companies’ data collected quarterly for 16 years consisting of 71 financial ratios. The experimental results demonstrate that models created using 12 features chosen by the proposed algorithm outperform models with all features with up to 6% accuracy. The importance-based ranks of all features are generated using the framework calculated using 13 implemented feature selection techniques. All selected feature subsets are cross-validated using prediction models such as support vector machine, logistic regression, KNeighbors classffier, random forest, and deep neural network. The HSFSI framework is available as an open-source Python software package named ‘‘feature-selectionpy’’ available at GitHub and Python package index.",
    absbox: "absPopup2",
  },
];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);

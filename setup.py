import os

cur_dir = os.getcwd()

# For Python libraries
os.system(f'pip install -r {os.path.join(cur_dir,'requirements.txt')}')

# For React Dependencies
os.system(f'cd {os.path.join(cur_dir,'frontend-UI')} && npm install')


# For NLP Libraries
import nltk

nltk.download('stopwords')
nltk.download('punkt')
nltk.download('wordnet')


# To download the RoBERTa model (only need to download the first time)
from transformers import AutoTokenizer
from transformers import AutoModelForSequenceClassification

m = AutoTokenizer.from_pretrained("cardiffnlp/twitter-roberta-base-sentiment")
t = AutoModelForSequenceClassification.from_pretrained("cardiffnlp/twitter-roberta-base-sentiment")
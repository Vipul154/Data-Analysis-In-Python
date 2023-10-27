# Libraries installed

from flask import Flask
import numpy as np
import pandas as pd
import plotly.express as px
from textblob import TextBlob
from flask_cors import CORS

import matplotlib.pyplot as plt
import seaborn as sns
import plotly.graph_objs as pltgraph

#Initializing our App
app = Flask(__name__)
CORS(app)

dff = pd.read_csv('netflix_titles.csv')
dff.head()

#The First pie chart graph code starts

z = dff.groupby(['rating']).size().reset_index(name='counts')
pieChart = px.pie(z, values='counts', names='rating', title='',color_discrete_sequence=px.colors.qualitative.Set3)
pieChart.update_layout(margin=dict(l=0, r=0, t=10, b=0))

pieChart.update_layout(
    plot_bgcolor='rgba(0,0,0,0)',
    paper_bgcolor='rgba(0,0,0,0)'
)

graph_01 = pieChart.to_html()

@app.route('/api/graph_01')
def get_graph_01():
    return graph_01

#The first pie chart code ends

#The second graph code starts here
dff['director']=dff['director'].fillna('No Director Specified')
filtered_directors=pd.DataFrame()
filtered_directors=dff['director'].str.split(',',expand=True).stack()
filtered_directors=filtered_directors.to_frame()
filtered_directors.columns=['Director']
directors=filtered_directors.groupby(['Director']).size().reset_index(name='Total Content')
directors=directors[directors.Director !='No Director Specified']
directors=directors.sort_values(by=['Total Content'],ascending=False)
directorsTop5=directors.head()
directorsTop5=directorsTop5.sort_values(by=['Total Content'])
fig1=px.bar(directorsTop5,x='Total Content',y='Director',title='Top 5 Directors on Netflix')
fig1.update_layout(margin=dict(l=0, r=0, t=30, b=0))

fig1.update_layout(
    plot_bgcolor='rgba(0,0,0,0)',
    paper_bgcolor='rgba(0,0,0,0)'
)
graph_02 = fig1.to_html()

@app.route('/api/graph_02')
def get_graph_02():
    return graph_02

#The second graph code ends here

#The third graph code starts here
dff['cast']=dff['cast'].fillna('No Cast Specified')
filtered_cast=pd.DataFrame()
filtered_cast=dff['cast'].str.split(',',expand=True).stack()
filtered_cast=filtered_cast.to_frame()
filtered_cast.columns=['Actor']
actors=filtered_cast.groupby(['Actor']).size().reset_index(name='Total Content')
actors=actors[actors.Actor !='No Cast Specified']
actors=actors.sort_values(by=['Total Content'],ascending=False)
actorsTop5=actors.head()
actorsTop5=actorsTop5.sort_values(by=['Total Content'])
fig2=px.bar(actorsTop5,x='Total Content',y='Actor', title='Top 5 Actors on Netflix')

fig2.update_layout(
    plot_bgcolor='rgba(0,0,0,0)',
    paper_bgcolor='rgba(0,0,0,0)'
)
graph_03 = fig2.to_html()

@app.route('/api/graph_03')
def get_graph_03():
    return graph_03
#The third graph code ends here

#The fourth graph code ends here
df1=dff[['type','release_year']]
df1=df1.rename(columns={"release_year": "Release Year"})
df2=df1.groupby(['Release Year','type']).size().reset_index(name='Total Content')
df2=df2[df2['Release Year']>=2010]
fig3 = px.line(df2, x="Release Year", y="Total Content", color='type',title='Trend of content produced over the years on Netflix')

fig3.update_layout(
    plot_bgcolor='rgba(0,0,0,0)',
    paper_bgcolor='rgba(0,0,0,0)'
)
graph_04 = fig3.to_html()

@app.route('/api/graph_04')
def get_graph_04():
    return graph_04
#The fourth graph code ends here

#The fifth graph code starts here
dfx=dff[['release_year','description']]
dfx=dfx.rename(columns={'release_year':'Release Year'})
for index,row in dfx.iterrows():
    z=row['description']
    testimonial=TextBlob(z)
    p=testimonial.sentiment.polarity
    if p==0:
        sent='Neutral'
    elif p>0:
        sent='Positive'
    else:
        sent='Negative'
    dfx.loc[[index,2],'Sentiment']=sent


dfx=dfx.groupby(['Release Year','Sentiment']).size().reset_index(name='Total Content')

dfx=dfx[dfx['Release Year']>=2010]
fig4 = px.bar(dfx, x="Release Year", y="Total Content", color="Sentiment", title="Sentiment of content on Netflix")

fig4.update_layout(
    plot_bgcolor='rgba(0,0,0,0)',
    paper_bgcolor='rgba(0,0,0,0)'
)
graph_05 = fig4.to_html()

@app.route('/api/graph_05')
def get_graph_05():
    return graph_05
#The fifth graph code ends here

#The code for the other dataset Graphs starts here
#Graph_06 Code Start

#Graph_06 Code End



#The App execution code
if __name__ == "__main__":
     app.run(debug=True ,port=5000,use_reloader=False)




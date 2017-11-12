# Data Visualization Test

## Solution

I have provided three visualisations to see data easily

* Compare Face value or PNs by offence category, this data can be seen by a year
* Visualize category share by PN count or Face Value per year
* Visualize all data in one graph to give snapshot

## Technical

* Standard Node and React project using Webpack startup kit
* Visualization using recharts
* Application consists following main things:
  * App
  * Components
    * Reusable components for bar and pie charts
    * Comparison component
    * Allocation component
  * Utils: basic util function to transforming data to be consumed by charts, basic data formatting functions
* I have extracted data fetch into a seperate mockFetchData file. This can be easily replaced by actual data source to get live data feed via API

## Enhancement:

* Different visualization can be added after understanding the business requirements, like trend lines, Tables with color coding
* Currently the sample data added to be the app can be easily hooked into API to get the data
* Add more test

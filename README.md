# README

# DSCI 554 Assignment: Evaluate and Create Dashboards _with Color Scales and Maps_

## Country Data Dashboard

**Dashboard Implementation**

### Dataset: United Nations data:
-- SYB61_253_Population Growth Rates in Urban areas and Capital cities.csv
-- SYB65_1_202209_Population, Surface Area and Density.csc
-- SYB65_246_202209_Population Growth, Fertility and Mortality Indicators.csv
-- SYB65_327_202209_International Migrants and Refugees.csv

- There are 8 Graphs
-- Table
-- Bar chart 
-- ScatterPlot
-- Line Chart
-- Pie Chart
-- Dot map
-- Choropleth Map
-- Proportional Symbol Map

#### Files:
- Wireframe Folder
- Bar_Chart_Wireframe.svg
- Home_Page_Wireframe.svg
- Line_Chart_Wireframe.svg
- Scatter_Plot_Wireframe.svg
- Table_Wireframe.svg
- Pie_Chart_Wireframe.svg
- Dot_Map_Wireframe.svg
- Choropleth_Map_Wireframe.svg
- Proportional_Symbol_Map_Wireframe.svg

- Data Folder
--International Migrants and Refugees
-- Population Growth Rates
-- Population Growth, Fertility and Mortality
-- Population, Surface Area and Density
-- world_population.csv
-- world.geojson
-- dot.csv
-- proprtional.csv
-- Population estimates (millions).csv

- graphics Folder
-- barchart.html 
-- index.html 
-- line-chart.html 
-- scatterplot.html 
-- table.html 
-- pie-chart.html 
-- Dot_Map.html
-- Choropleth_Map.html
-- Proportional_Symbol_Map.html

- JavaScript Folder
--barchart.js 
--line-chart.js 
--scatterplot.js 
--table.js
--pie-chart.js
-- Dot_Map.js
-- Choropleth_Map.js
-- Proportional_Symbol_Map.js

- style Folder
--style.css 
--styleLC.css 
--styleBC.css 
--styleSP.css
--styleT.css
--stylePC.css
--styleDM.css
--styleCM.css
--stylePSM.css

-- Flag.png

-- Visualisation_Wheel.svg

--data_preprocessing.ipynb

Google Slides:
https://docs.google.com/presentation/d/1nL8uUFntuWPZEVIl2DfR7Dkak2y2aay7Dm1ugO9zdSU/edit?usp=sharing

# -- Please use VS code's live server due to the error in loading data on Chrome

---------
## Population Growth Rate insights:

1. **Urbanization Trends:** The data shows that, in general, the urban population is growing at a faster rate than the rural population. This trend is evident in countries like Brazil, India, South Africa, Turkey, and Vietnam. Urbanization can be attributed to factors such as rural-to-urban migration and economic development.

2. **Capital City Populations:** Capital cities tend to have a significant share of the total population in most countries. For example, in Brazil, India, and Turkey, the capital city population represents a relatively small percentage of the total population but still constitutes a large number of people due to the countries' large populations.

3. **Rural Population Decline:** Some countries, like Japan, experience a decline in their rural populations. The rural population in Japan decreased significantly between 2005 and 2010, indicating ongoing urbanization and an aging population in rural areas.

4. **Variability in Growth Rates:** The growth rates for both rural and urban populations vary across countries and years. Some countries experience negative growth rates in rural populations, while others have positive growth rates. This variability can be linked to factors such as birth rates, migration patterns, and government policies.

5. **Yearly Variations:** It's worth noting that growth rates can vary significantly from year to year. For example, in Japan, the rural population had a substantial decline in 2005 but a less severe decline in 2010. Such fluctuations could be influenced by economic conditions, natural disasters, or other factors.

6. **No Data for Certain Years:** There are instances where data is missing for specific years, such as 2018. This can make it challenging to analyze continuous trends, and it's important to consider the availability of data when drawing conclusions.

7. **Potential for Further Analysis:** While this dataset provides valuable insights into population trends, it could be further analyzed to explore correlations with other socio-economic factors, such as GDP growth, infrastructure development, and government policies, to gain a deeper understanding of the factors influencing these population dynamics.

These insights can be used by policymakers, researchers, and urban planners to make informed decisions and develop strategies for addressing the challenges and opportunities associated with urbanization and demographic changes in various countries.


# Population Growth, Fertility and Mortality Insights:


The provided data contains information related to several countries, focusing on various demographic and health indicators over multiple years. Here are some insights and observations from the data:

1. **Infant Mortality:** The "Infant mortality for both sexes (per 1,000 live births)" column indicates the number of infant deaths per 1,000 live births. Lower values represent better healthcare and lower infant mortality rates. Brazil, India, South Africa, Turkey, and Vietnam all show decreasing trends in infant mortality over time, suggesting improvements in healthcare for infants.

2. **Life Expectancy:** The "Life expectancy at birth for both sexes (years)" column reflects the average expected lifespan at birth. Japan consistently has the highest life expectancy among the countries listed, indicating a well-developed healthcare system and overall population health.

3. **Population Growth:** The "Population annual rate of increase (percent)" column provides insights into the annual population growth rate. South Africa exhibits the highest population growth rate, while Japan's population is either stable or declining, reflecting differing demographic trends.

4. **Total Fertility Rate:** The "Total fertility rate (children per woman)" column represents the average number of children a woman is expected to have during her lifetime. Most countries in the dataset have total fertility rates below the replacement level (approximately 2.1 children per woman), indicating potential future population challenges related to aging and demographic imbalances.

5. **Comparative Health:** When comparing health indicators such as infant mortality and life expectancy, Japan stands out as having significantly better health outcomes. However, other countries, such as South Africa and India, face greater health challenges, particularly in terms of infant mortality rates and lower life expectancy.

6. **Temporal Trends:** For some indicators, the data shows improvements over time. For example, infant mortality rates have decreased in Brazil and India. However, South Africa's infant mortality rate increased between 2010 and 2015, indicating potential healthcare challenges in that period.

7. **Diversity in Population Dynamics:** The data reveals a diversity of population dynamics among the countries, including variations in fertility rates, growth rates, and health outcomes. These differences can be influenced by factors such as healthcare systems, socio-economic conditions, and government policies.

8. **Future Projections:** The data includes projections for the year 2022, offering insights into expected changes in these demographic and health indicators. Countries like Japan are expected to maintain their high life expectancies, while others may continue to experience improvements or face specific challenges.

Overall, this dataset provides valuable information for understanding the demographic and health profiles of different countries and tracking changes over time. It is useful for researchers, policymakers, and public health officials to assess and address health and population-related issues in these nations.

----------

# Population, Surface Area and Density Insights


The provided data contains demographic and population statistics for several countries over multiple years. Here are some insights and observations from the data:

1. **Age Distribution:**
   - The "Population aged 0 to 14 years old (percentage)" column represents the percentage of the population that is under 14 years old, while the "Population aged 60+ years old (percentage)" column represents the percentage of the population that is 60 years and older.
   - Brazil, India, South Africa, Turkey, and Vietnam all show a decrease in the percentage of the population aged 0 to 14 years over the years, suggesting a potential shift in the age structure toward an older population.

2. **Population Density:**
   - The "Population density" column indicates the number of people living per square kilometer of land area.
   - India has the highest population density among the countries listed, indicating a high population concentration in a relatively small land area.

3. **Population Size:**
   - The "Population mid-year estimates (millions)" column provides the estimated total population for each country in millions.
   - India has the largest population among the countries listed, with a population size exceeding a billion people.

4. **Sex Ratio:**
   - The "Sex ratio (males per 100 females)" column reflects the ratio of males to females in the population.
   - In most countries, the sex ratio is slightly skewed towards males, with more males than females in the population. Japan is an exception, where the sex ratio is skewed towards females.

5. **Temporal Trends:**
   - The data shows changes over time in various demographic indicators, such as a decrease in the percentage of the population aged 0 to 14 years and an increase in the percentage aged 60+ years in many countries.
   - Population density tends to increase over time due to population growth, urbanization, and limited land resources.

6. **Country Comparisons:**
   - Japan has the highest percentage of the population aged 60+ years, indicating an aging population.
   - South Africa has a relatively low percentage of the population aged 60+ years, suggesting a younger population structure.

7. **Future Projections:**
   - Projections for 2022 indicate potential demographic changes, including further shifts in age distribution and changes in population size.

8. **Gender Imbalance:**
   - The slight skew towards more males in most countries could be influenced by factors such as migration patterns and gender-specific mortality rates.

Overall, this dataset provides valuable insights into the age distribution, population density, and gender balance of these countries. It is useful for understanding demographic trends, urbanization, and potential challenges related to an aging population or high population density.



# International Migrants and Refugees Insights



The provided data presents information on international migrant stock as a percentage of the total population for both sexes, as well as the gender-specific distribution of international migrants in various countries over different years. Here are some insights and observations:

1. **International Migration Trends:**
   - The data reveals the percentage of international migrants in each country's total population over the years. International migration can be influenced by factors like economic opportunities, political stability, and quality of life.

2. **Consistency in Brazil and India:**
   - In Brazil and India, the percentage of international migrants as a share of the total population remains relatively low and consistent across the years. This suggests that these countries have relatively stable migration patterns during the specified time frame.

3. **Increasing Migration in Japan:**
   - Japan shows a notable increase in international migrants as a percentage of the total population over the years, from 1.6% in 2005 to 2.2% in 2020. This may indicate a growing trend of international migration into Japan during this period.

4. **South Africa's Fluctuations:**
   - South Africa experiences fluctuations in its international migrant population as a percentage of the total population. It reached a peak of 5.8% in 2015 but decreased to 4.8% in 2020. This suggests that migration patterns in South Africa can be dynamic and influenced by various factors.

5. **South Sudan's Rapid Increase:**
   - South Sudan demonstrates a significant increase in international migrants as a percentage of the total population, particularly between 2010 and 2015, when it jumped from 2.4% to 7.9%. This could be related to political changes and conflicts in the region during that period.

6. **Turkey's Growth in International Migration:**
   - Turkey also shows a consistent growth in international migrants as a percentage of the total population, reaching 7.2% in 2020. This suggests an increasing trend in international migration to Turkey.

7. **Gender Distribution:**
   - The data also provides information on the gender distribution of international migrants, with separate percentages for females and males.
   - In most countries, the male percentage is slightly higher than the female percentage, indicating that there are more male international migrants in these countries.

8. **Consistency in Vietnam:**
   - Vietnam maintains a very low percentage of international migrants as a share of the total population throughout the years, with both sexes accounting for less than 0.1%. This suggests a relatively stable migration situation in Vietnam during the specified years.

9. **Implications:**
   - The data can be valuable for understanding migration trends and their potential implications for labor markets, social integration, and cultural diversity in these countries.
   - The fluctuations observed in some countries may be indicative of changing economic or political conditions, and further analysis would be needed to understand the underlying factors.

Overall, this dataset provides insights into the presence and gender distribution of international migrants in various countries, highlighting the dynamic nature of international migration patterns over time.



----------------


Aanalyze the insights of the 5 charts:

### 1. International Migrant Stock Data
   - **Brazil and India**: Both countries have a relatively low percentage of international migrants compared to their total populations, and the percentages have remained relatively stable over the years. Brazil has slightly higher male international migrants than females, while India has a more balanced distribution.
   - **Japan and South Africa**: Japan has a lower percentage of international migrants compared to South Africa. In both countries, the percentage of female international migrants is higher than males.
   - **Turkey**: Turkey has a moderate percentage of international migrants, with a slightly higher percentage of males compared to females.

### 2. Capital City Population Data
   - **Brasília (Brazil)**: The capital city population of Brasília as a percentage of the total population increased from 2005 to 2015 and then decreased by 2020. The rural population growth rate was negative, indicating urbanization, and the urban population growth rate declined over the years.
   - **New Delhi (India)**: New Delhi also saw an increase in the capital city population as a percentage of the total population, with positive rural and urban population growth rates.
   - **Tokyo (Japan)**: Tokyo's capital city population as a percentage of the total population is extremely high, but it remained relatively stable over the years. The urban population growth rate declined significantly.
   - **Cape Town (South Africa)**: Cape Town's capital city population as a percentage of the total population increased gradually, with positive urban population growth.
   - **Ankara (Turkey)**: Ankara's capital city population increased slightly as a percentage of the total population, with both rural and urban population growth rates remaining positive.

### 3. Demographic Data
   - **Infant Mortality**: Infant mortality rates have generally decreased over time in all countries, indicating improvements in healthcare and child welfare.
   - **Life Expectancy**: Life expectancy at birth has improved in all countries, showing increased overall health and longevity.
   - **Population Annual Rate of Increase**: This rate varies across countries, with India having the highest increase and Japan having the lowest.
   - **Total Fertility Rate**: Fertility rates have decreased in all countries, which is typical as countries develop economically and socially.

### 4. Population Demographics Data
   - **Age Distribution**: The percentage of the population aged 0 to 14 years old has generally decreased, while the percentage aged 60+ years old has increased, indicating an aging population.
   - **Population Density**: Population density has generally increased, with India having the highest population density.
   - **Sex Ratio**: The sex ratio (males per 100 females) varies across countries, with South Africa having a lower ratio and India having a higher ratio.


## 5.Capital city population (thousands)
   - **Population Dynamics:**
    - Among these capital cities, New Delhi had the largest population in all years, followed by Tokyo, Istanbul, Cape Town, and Brasília.

   - **Population Trends:**
   - In general, all the capital cities in this dataset experienced population growth over the years, which is indicative of urbanization and demographic changes.

   - **Highest Population:**
   - Tokyo, Japan, had the highest population among the capital cities in this dataset in 2005, 2010, and 2015.

   - **Lowest Population:**
   - Cape Town, South Africa, had the lowest population among the capital cities in this dataset in 2005, 2010, and 2015.
   
   These insights provide a snapshot of the population dynamics in the capital cities of these countries over the specified time periods. It's important to note that this data doesn't cover the most recent years beyond 2015, so more recent population trends are not included.
# Project_Mishop

The Mishop is a Project For Preventing the WildFire Acrose India Before It Happend by Predicting The Temprature, WInd Speed - Wind Direction, Humidity, Rainfall( Natural &amp; Climent Affected Un-Natural Rainfall), Fuel Of Area(Vagitation &amp; Plants), NDVI, Previos Fire Incidents - Data, Geolocation Observation Of Area, Heat Index &amp; Environmental Feature

#

<h3> Tech Stack </h3>

Front-End For Website Inter: Html, Css, Js, Leafeft.js( For Map Marker And Tools), Chartjs, react.

Machine Learning For process-train-deploy model: "Python-Scikit-pandas-numpy-matplotlib-TensorFlow-Pytorch-Model & Tech.

Data Sources For Model Input: {{[Satellite Data-NASA MODIS, ISRO BHUVAN, Google Earth Engine}}], {{[WeatherData-OpenWeatherMap API, IMD (India)]}}, {{[Vegetation Index-NDVI from Earth Engine or MODIS]}}, {{[Elevation/Map Data-	OpenStreetMap, DEM data]}}

Backend (Server & API): Django + Django Rest Framework(to serve predictions as JSON) (API) + Model Prediction Code Use ML model saved via joblib or pickle.

<h3> define the features and workflow of the application </h3>
Ideas: Their Are 4 targeted user in the ecosystem: 
1.) Forest Dept, 
2.) Fire Dept, 
3.) Police Dept, 
4.) Public Authority, 
5.) Local End User.

The Every User Has their own Features, Dashboards, Notifications, Updates, ex: Forest Officer can identify the fire is happenig by the system analyze, he/she inform the other authority about that, target the specific area do the all precaution like water spreading, evac, wild life rescue etc.

Use cases: validate the confirm fire incidents and avoid the rumeor via satelite imageing and close cordination with the other agency.

WorkFlow: First Done the Main Components For Fire Prediction by location: after that Add User.

# hackthe6ix
FIREcast: HT6 2023 Submission
Made by: Emma Shi, Leo Peng, Harguntas Benipal and Kelvin Nguyen

FIREcast is a webapp designed to help avoid wildfires and predict the likelyhood of such a event occuring in your city.

The prediction is based of off several factors such as: temperature, humidity, the forecast and many other factors. These values were pulled from live weather values using open weather map apis. The rest of the backend was built using raw JavScript.

The frontend was developed using HTML, CSS, and JS. Some libraries used in the frontend include "Animate On Scroll". We used asynchronous functions and onClick buttons to call the GeoLocation API which gave longitude/latitude coordinates. Then, we used those coordinates to call the Weather API to get the weather, humidity, wind speed, etc. Using this information, we performed the algorithm to find the FWI.

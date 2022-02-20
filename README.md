## Developer ApiRest Weather (Nodejs + Express + OpenWeatherMap API)

### Summary

Se requiere implementar una API que provea en formato JSON el estado del tiempo basado en diferentes endpoints.

### Endpoints

Ruta base
`/v1`

`/v1/location`
Devuelve los datos de ubicación city según ip-api. /current[/city]

City es un parámetro opcional. Devuelve los datos de ubicación city o la ubicación actual según ip-api y el estado del tiempo actual.

`/v1/forecast[/city]` City es un parámetro opcional. Devuelve los datos de ubicación city o la ubicación actual según ip-api y el estado del tiempo a 5 días

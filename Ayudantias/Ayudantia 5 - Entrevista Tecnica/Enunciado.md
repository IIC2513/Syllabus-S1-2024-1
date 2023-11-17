# Enunciado Entrevista Técnica

## Objetivo General

A través de este ejercicio se busca poder evaluar las habilidades de resolución de problemas de los alumnos, así como también su capacidad de comunicar sus ideas y pensamientos. En este ejercicio también se busca evaluar la forma en la cual se hace uso del internet para poder llegar a una solución al problema dado.

## Ejercicio

El ejercicio consiste en realizar un programa en `JavaScript` el cual nos permita obtener el precio del dólar y del euro en pesos chilenos dentro de un rango de fechas establecido. Para esto, deberán scrappear la página [https://si3.bcentral.cl/Bdemovil/BDE/IndicadoresDiarios](https://si3.bcentral.cl/Bdemovil/BDE/IndicadoresDiarios) para obtener los datos necesarios para realizar el ejercicio.

Para la aplicación, se debe hacer uso del paquete `puppeteer` de `Node.js` para poder llevar a cabo el scraping de la página web.

El programa debe contener una función principal llamada `run` que debe recibir como parámetros la fecha de inicio y la fecha de término del rango de fechas a consultar. Estos parámetros deben ser de tipo string con el formato: `YYYY-MM-DD`.

Luego, debes obtener el precio del dólar y del euro para cada día dentro del rango de fechas dado (incluyendo los extremos).

Finalmente, debes crear un objeto `JSON` con la siguiente estructura:

```json
{
  "11-10-2019": {
    "dollar": "902,89",
    "euro": "966,59"
  },
  "12-10-2019": {
    "dollar": "902,89",
    "euro": "966,59"
  },
  "13-10-2019": {
    "dollar": "902,89",
    "euro": "966,59"
  }
}
```
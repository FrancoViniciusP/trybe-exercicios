SELECT UCASE('trybe');
SELECT LCASE('RUA NORTE 1500, SÃO PAULO, BRASIL');
SELECT REPLACE('Você já ouviu falar do DuckDuckGo?','DuckDuckGo', 'Google');
SELECT CHAR_LENGTH('Uma frase qualquer');
SELECT SUBSTRING('A linguagem JavaScript está entre as mais usadas' , 12, 11);
---------
SELECT film_id, title,
  IF(title = 'ACE GOLDFINGER', 'Já assisti a esse filme', 'Não conheço o filme') 
  AS  'conheço o filme?'
  FROM sakila.film
  LIMIT 5;
  
SELECT title, rating,
  CASE
    WHEN rating = 'G' THEN 'Livre para todos'
    WHEN rating = 'PG' THEN 'Não recomendado para menores de 10 anos'
    WHEN rating = 'PG-13' THEN 'Não recomendado para menores de 13 anos'
    WHEN rating = 'R' THEN 'Não recomendado para menores de 17 anos'
	ELSE 'Proibido para menores de idade'
  END AS 'público-alvo'
  FROM sakila.film;
-------
SELECT IF(15 MOD 2 = 0, 'Par', 'Ímpar')
  AS 'Par ou Ímpar';
SELECT 220 DIV 12;
SELECT 220 - (220 DIV 12) * 12;
-------
SELECT ROUND(15 + (RAND() * 5));
SELECT ROUND(15.7515971, 5);
SELECT FLOOR(39.494);
SELECT CEIL(85.234);
-------
SELECT CURRENT_DATE();
SELECT DATEDIFF('2030-01-20', CURRENT_DATE());
SELECT TIMEDIFF('10:25:45', '11:00:00');
-------
SELECT * FROM sakila.film;
SELECT 
  AVG(length) AS 'Média de Duração',
  MIN(length) AS 'Duração Mínima',
  MAX(length) AS 'Duração Máxima',
  SUM(length) AS 'Tempo de Exibição Total',
  COUNT(length) AS 'Filmes Registrados'
FROM sakila.film ;
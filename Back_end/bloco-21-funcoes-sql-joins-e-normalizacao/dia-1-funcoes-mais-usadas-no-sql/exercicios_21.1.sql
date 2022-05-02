SELECT * FROM hr.jobs;

-- 2. 🚀 Escreva uma query que exiba a diferença entre o maior e o menor salário.
SELECT JOB_TITLE,
	(MAX_SALARY-MIN_SALARY) AS `Diferença salarios`
FROM hr.jobs; 

-- 3. 🚀 Escreva uma query que exiba a média salarial de cada JOB_ID , ordenando pela média salarial em ordem decrescente.
SELECT JOB_ID,
	AVG(MIN_SALARY + MAX_SALARY) AS `Média Salarial`
FROM hr.jobs
GROUP BY JOB_ID
ORDER BY `Média Salarial` DESC;

-- 5. 🚀 Escreva uma query que exiba quatro informações: o maior salário, o menor salário, a soma de todos os salários e a média dos salários. Todos os valores devem ser formatados para ter apenas duas casas decimais.
SELECT 
 ROUND(MAX(SALARY), 2) AS `Maior Salário`,
 ROUND(MIN(SALARY), 2)  AS `Menor Salário`,
 ROUND(SUM(SALARY), 2) AS `Soma dos Salários`,
 ROUND(AVG(SALARY), 2) AS `Média dos Salários`
FROM hr.employees;

-- 10. 🚀 Escreva um query que exiba média salarial e o número de funcionários de todos os departamentos com mais de dez funcionários. Dica: agrupe pelo DEPARTMENT_ID .

SELECT 
  DEPARTMENT_ID,
  COUNT(FIRST_NAME) AS `nº de empregados do setor`,  
  AVG(SALARY) 
FROM hr.employees
GROUP BY `DEPARTMENT_ID`;

-- 11. 🚀 Escreva uma query que atualize a coluna PHONE_NUMBER , de modo que todos os telefones iniciados por 515 agora devem iniciar com 777.

SELECT
  REPLACE(PHONE_NUMBER, '515', '777')
FROM hr.employees;
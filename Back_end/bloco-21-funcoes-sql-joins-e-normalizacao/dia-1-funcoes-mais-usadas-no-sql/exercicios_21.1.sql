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
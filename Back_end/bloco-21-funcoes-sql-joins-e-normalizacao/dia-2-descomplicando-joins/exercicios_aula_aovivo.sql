SELECT o.OrderID, e.FirstName, c.CustomerName 
FROM `store-sample`.orders o
INNER JOIN `store-sample`.employees e
INNER JOIN `store-sample`.customers c
ON o.CustomerID = c.CustomerID 
AND o.EmployeeID = e.EmployeeID;

-- Busque todos os nomes das pessoas que possuem pedidos realizados e as pessoas funcionárias que fizeram a operação e a empresa associada para o envio do produto 
SELECT o.OrderID, c.CustomerName, e.FirstName, s.ShipperName
FROM `store-sample`.orders o 
INNER JOIN `store-sample`.customers c
INNER JOIN `store-sample`.employees e
INNER JOIN `store-sample`.shippers s
ON o.CustomerID = c.CustomerID 
AND o.EmployeeID = e.EmployeeID
AND o.ShipperID = s.ShipperID;

-- Retorne o CustomerName e OrderID de todas os customers mesmo que nunca tenha sido feita uma compra 
SELECT o.OrderID, c.CustomerName 
FROM `store-sample`.orders o
RIGHT JOIN `store-sample`.customers c
ON o.CustomerID = c.CustomerID;

-- Retorne o OrderID, Employees LastName e FistName de TODOS os employees, mesmo que não haja nenhuma venda (order) 
SELECT o.OrderID, e.FirstName, e.LastName
FROM `store-sample`.orders o
RIGHT JOIN `store-sample`.employees e
ON o.EmployeeID = e.EmployeeID;

-- 1
SELECT clients.id, clients.first_name, clients.last_name, clients.email, accounts.account_no, accounts.balance FROM clients LEFT JOIN accounts ON clients.id = accounts.client_id;

-- 2
SELECT A.account_no, A.client_id, account_types.name FROM account_types LEFT JOIN accounts as A ON A."type" = account_types.id;

-- 3
-- No me permitió usar "AS" para establecer alias a las tablas
SELECT transactions.id, transactions.amount, transactions_types."name" FROM transactions_types RIGHT JOIN transactions ON transactions_types.id = transactions.transaction_type;

--4
SELECT transactions.id, transactions.amount, transactions_types.name FROM transactions RIGHT JOIN transactions_types ON transactions.transaction_type = transactions_types.id;

CREATE VIEW v_clients_accounts AS SELECT clients.id, clients.first_name, clients.last_name, clients.email, accounts.account_no, accounts.balance FROM clients LEFT JOIN accounts ON clients.id = accounts.client_id;
CREATE VIEW v_accounts_types AS SELECT accounts.account_no, accounts.client_id, account_types.name FROM account_types LEFT JOIN accounts ON accounts."type" = account_types.id;
CREATE VIEW v_transactions_detail AS SELECT transactions.id, transactions.amount, transactions_types."name" FROM transactions_types RIGHT JOIN transactions ON transactions_types.id = transactions.transaction_type;
CREATE VIEW v_transations_types_detail AS SELECT transactions.id, transactions.amount, transactions_types.name FROM transactions RIGHT JOIN transactions_types ON transactions.transaction_type = transactions_types.id;

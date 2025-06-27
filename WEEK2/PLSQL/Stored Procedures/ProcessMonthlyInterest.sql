CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest IS
BEGIN
    UPDATE ACCOUNTS
    SET BALANCE = BALANCE + (BALANCE * 0.01),
        LASTMODIFIED = SYSDATE
    WHERE ACCOUNTTYPE = 'Savings';

    COMMIT;
END;
/


BEGIN
   ProcessMonthlyInterest;
END;
/

SELECT * FROM ACCOUNTS;


-- Before
-- ACCOUNTID CUSTOMERID ACCOUNTTYPE BALANCE LASTMODIFIED              
-- --------- ---------- ----------- ------- ------------------------- 
-- 1         1          Savings     1020.1  06/27/2025, 01:17:25 PM   
-- 2         2          Checking    1500    06/27/2025, 12:05:05 PM   



-- After
-- ACCOUNTID CUSTOMERID ACCOUNTTYPE BALANCE  LASTMODIFIED              
-- --------- ---------- ----------- -------- ------------------------- 
-- 1         1          Savings     1030.301 06/27/2025, 01:17:56 PM   
-- 2         2          Checking    1500     06/27/2025, 12:05:05 PM   





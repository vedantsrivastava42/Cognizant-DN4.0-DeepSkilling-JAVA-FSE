CREATE OR REPLACE PROCEDURE FundTransfer(
    from_accountId IN number,
    to_accountId IN number,
    amount IN number
) IS
    v_balance NUMBER;
BEGIN
    SELECT balance INTO v_balance
    FROM ACCOUNTS
    WHERE ACCOUNTID = from_accountId;

    IF v_balance < amount THEN
        RAISE_APPLICATION_ERROR(-20001, 'Insufficient Balance');
    END IF;

    UPDATE ACCOUNTS
    SET BALANCE = BALANCE - amount,
        LASTMODIFIED = SYSDATE
    WHERE ACCOUNTID = from_accountId;

    UPDATE ACCOUNTS
    SET BALANCE = BALANCE + amount,
        LASTMODIFIED = SYSDATE
    WHERE ACCOUNTID = to_accountId;
END;
/

BEGIN
    FundTransfer(2, 1, 500);
END;
/

SELECT * FROM ACCOUNTS;

-- BEFORE
-- ACCOUNTID CUSTOMERID ACCOUNTTYPE BALANCE  LASTMODIFIED              
-- --------- ---------- ----------- -------- ------------------------- 
-- 1         1          Savings     1030.301 06/27/2025, 01:17:56 PM   
-- 2         2          Checking    1500     06/27/2025, 12:05:05 PM   


-- After
-- ACCOUNTID CUSTOMERID ACCOUNTTYPE BALANCE  LASTMODIFIED              
-- --------- ---------- ----------- -------- ------------------------- 
-- 1         1          Savings     1530.301 06/27/2025, 01:41:41 PM   
-- 2         2          Checking    1000     06/27/2025, 01:41:41 PM   

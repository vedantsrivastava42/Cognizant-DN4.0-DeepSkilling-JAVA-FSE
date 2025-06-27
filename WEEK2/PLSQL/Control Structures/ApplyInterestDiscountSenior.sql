BEGIN
    FOR res IN (
        SELECT c.name, c.customerID, l.loanID, l.InterestRate
        FROM LOANS l
        JOIN CUSTOMERS c ON l.CUSTOMERID = c.CUSTOMERID
        WHERE TRUNC(MONTHS_BETWEEN(SYSDATE, c.DOB)/12) > 60
    ) LOOP
        UPDATE LOANS
        SET InterestRate = res.InterestRate - 1
        WHERE loanID = res.loanID;
    END LOOP;

    COMMIT;
END;
/

-- BEFORE
-- LOANID CUSTOMERID LOANAMOUNT INTERESTRATE STARTDATE                 ENDDATE                   
-- ------ ---------- ---------- ------------ ------------------------- ------------------------- 
-- 2      4          5000       11           06/28/2025, 01:39:52 AM   07/13/2025, 01:47:03 AM   
-- 1      1          5000       5            06/27/2025, 12:05:05 PM   06/27/2030, 12:05:05 PM   

-- AFTER
-- LOANID CUSTOMERID LOANAMOUNT INTERESTRATE STARTDATE                 ENDDATE                   
-- ------ ---------- ---------- ------------ ------------------------- ------------------------- 
-- 2      4          5000       10           06/28/2025, 01:39:52 AM   07/13/2025, 01:47:03 AM   
-- 1      1          5000       5            06/27/2025, 12:05:05 PM   06/27/2030, 12:05:05 PM   




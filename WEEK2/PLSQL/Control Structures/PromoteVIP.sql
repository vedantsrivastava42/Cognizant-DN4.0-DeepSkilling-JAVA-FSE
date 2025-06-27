BEGIN
    FOR res IN (
        SELECT customerID, balance FROM CUSTOMERS
        WHERE balance > 10000
    ) LOOP
        UPDATE CUSTOMERS
        SET is_vip = 'Y'
        WHERE customerID = res.customerID;
    END LOOP;

    COMMIT;
END;
/

-- BEFORE
-- CUSTOMERID NAME                DOB                       BALANCE LASTMODIFIED              IS_VIP 
-- ---------- ------------------- ------------------------- ------- ------------------------- ------ 
-- 1          John Doe            05/15/1985, 05:30:00 AM   1000    06/27/2025, 12:05:05 PM   N      
-- 2          Jane Smith          07/20/1990, 05:30:00 AM   1500    06/27/2025, 12:05:05 PM   N      
-- 3          vedant srivastava   05/05/2000, 05:30:00 AM   15000   06/27/2025, 07:43:07 PM   N      

-- AFTER 
-- CUSTOMERID NAME                DOB                       BALANCE LASTMODIFIED              IS_VIP 
-- ---------- ------------------- ------------------------- ------- ------------------------- ------ 
-- 1          John Doe            05/15/1985, 05:30:00 AM   1000    06/27/2025, 12:05:05 PM   N      
-- 2          Jane Smith          07/20/1990, 05:30:00 AM   1500    06/27/2025, 12:05:05 PM   N      
-- 3          vedant srivastava   05/05/2000, 05:30:00 AM   15000   06/27/2025, 07:43:07 PM   Y      


BEGIN
    FOR res IN (
        SELECT c.name, c.CUSTOMERID, l.LOANID, l.ENDDATE
        FROM LOANS l
        JOIN CUSTOMERS c ON l.CUSTOMERID = c.CUSTOMERID
        WHERE l.ENDDATE BETWEEN SYSDATE AND SYSDATE + 30
    ) LOOP
        DBMS_OUTPUT.PUT_LINE(res.name || ' your loan is due on ' || TO_CHAR(res.ENDDATE, 'DD-Mon-YYYY'));
    END LOOP;

    COMMIT;
END;
/


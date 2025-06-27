CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus (p_Department IN VARCHAR2, p_BonusRate IN NUMBER) IS
BEGIN
    UPDATE Employees
    SET Salary = Salary + (Salary * p_BonusRate)
    WHERE Department = p_Department;

    COMMIT;
END;
/

BEGIN
    UpdateEmployeeBonus('HR', 0.10);
END;
/

SELECT * FROM Employees;

-- Before
-- EMPLOYEEID NAME            POSITION    SALARY DEPARTMENT HIREDATE                  
-- ---------- --------------- ----------- ------ ---------- ------------------------- 
-- 1          Alice Johnson   Manager     84700  HR         06/15/2015, 05:30:00 AM   
-- 2          Bob Brown       Developer   60000  IT         03/20/2017, 05:30:00 AM   


-- After
-- EMPLOYEEID NAME            POSITION    SALARY DEPARTMENT HIREDATE                  
-- ---------- --------------- ----------- ------ ---------- ------------------------- 
-- 1          Alice Johnson   Manager     93170  HR         06/15/2015, 05:30:00 AM   
-- 2          Bob Brown       Developer   60000  IT         03/20/2017, 05:30:00 AM   

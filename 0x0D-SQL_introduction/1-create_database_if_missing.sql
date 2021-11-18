-- A script that creates a database
[cc lang = "sql"]
IF NOT EXISTS (SELECT name FROM master.dbo.sysdatabases WHERE name = N'hbtn_0c_0')
CREATE DATABASE [hbtn_0c_0]
[/cc]

USE [master]
GO
/****** Object:  Database [Backend]    Script Date: 15/11/2024 7:54:44 p. m. ******/
CREATE DATABASE [Backend]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'Backend', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.MSSQLSERVER1\MSSQL\DATA\Backend.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'Backend_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.MSSQLSERVER1\MSSQL\DATA\Backend_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT, LEDGER = OFF
GO
ALTER DATABASE [Backend] SET COMPATIBILITY_LEVEL = 160
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [Backend].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [Backend] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [Backend] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [Backend] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [Backend] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [Backend] SET ARITHABORT OFF 
GO
ALTER DATABASE [Backend] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [Backend] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [Backend] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [Backend] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [Backend] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [Backend] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [Backend] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [Backend] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [Backend] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [Backend] SET  DISABLE_BROKER 
GO
ALTER DATABASE [Backend] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [Backend] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [Backend] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [Backend] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [Backend] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [Backend] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [Backend] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [Backend] SET RECOVERY FULL 
GO
ALTER DATABASE [Backend] SET  MULTI_USER 
GO
ALTER DATABASE [Backend] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [Backend] SET DB_CHAINING OFF 
GO
ALTER DATABASE [Backend] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [Backend] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [Backend] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [Backend] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'Backend', N'ON'
GO
ALTER DATABASE [Backend] SET QUERY_STORE = ON
GO
ALTER DATABASE [Backend] SET QUERY_STORE (OPERATION_MODE = READ_WRITE, CLEANUP_POLICY = (STALE_QUERY_THRESHOLD_DAYS = 30), DATA_FLUSH_INTERVAL_SECONDS = 900, INTERVAL_LENGTH_MINUTES = 60, MAX_STORAGE_SIZE_MB = 1000, QUERY_CAPTURE_MODE = AUTO, SIZE_BASED_CLEANUP_MODE = AUTO, MAX_PLANS_PER_QUERY = 200, WAIT_STATS_CAPTURE_MODE = ON)
GO
USE [Backend]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 15/11/2024 7:54:45 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[username] [nvarchar](50) NULL,
	[lastname] [nvarchar](50) NULL,
	[email] [nvarchar](50) NULL,
	[phone] [nvarchar](15) NULL,
	[namegerente] [nvarchar](50) NULL,
	[emailgerente] [nvarchar](50) NULL,
	[dateinicio] [date] NULL,
	[datefin] [date] NULL,
	[notas] [nvarchar](max) NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Users] ON 

INSERT [dbo].[Users] ([id], [username], [lastname], [email], [phone], [namegerente], [emailgerente], [dateinicio], [datefin], [notas]) VALUES (1, N'sobelo', N'sobelo', N'sobelo@gmail.com', N'12312313', N'sobelo', N'sobelo@gmail.com', CAST(N'2024-10-10' AS Date), CAST(N'2024-12-10' AS Date), N'suingale')
INSERT [dbo].[Users] ([id], [username], [lastname], [email], [phone], [namegerente], [emailgerente], [dateinicio], [datefin], [notas]) VALUES (2, N'David santiago', N'Enriquez', N'asdasd@gmail.com', N'3116851967', N'sadsadasd', N'asdasd@gmail.com', CAST(N'2024-11-18' AS Date), CAST(N'2024-11-20' AS Date), N'sadasd')
INSERT [dbo].[Users] ([id], [username], [lastname], [email], [phone], [namegerente], [emailgerente], [dateinicio], [datefin], [notas]) VALUES (3, N'David santiago', N'Enriquez', N'asdasd123@gmail.com', N'3116851967', N'sadsadasd', N'asdasd123@gmail.com', CAST(N'2024-11-20' AS Date), CAST(N'2024-11-23' AS Date), N'sadasdasdasd')
SET IDENTITY_INSERT [dbo].[Users] OFF
GO
USE [master]
GO
ALTER DATABASE [Backend] SET  READ_WRITE 
GO

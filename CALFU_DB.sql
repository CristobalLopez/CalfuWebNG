CREATE TABLE OBRA_MSTR(
	OBRA_ID INT IDENTITY(1,1) PRIMARY KEY
	,FILE_NAME VARCHAR(100) NOT NULL DEFAULT '' -- GUARDA EL NOMBRE DEL ARCHIVO DE IMAGEN
	,ALIAS VARCHAR(100) NOT NULL DEFAULT '' -- GUARDA EL NOMBRE DE LA OBRA
	,DESCRIPCION VARCHAR(500) NOT NULL DEFAULT ''
	,LARGO DECIMAL(18,9) NOT NULL DEFAULT 0
	,ANCHO DECIMAL(18,9) NOT NULL DEFAULT 0
	,TIPO_OBRA_ID INT NOT NULL DEFAULT 0
	,ME_GUSTA INT NOT NULL DEFAULT 0 --GUARDA LA SUMA DE LOS LIKES
	,NO_ME_GUSTA INT NOT NULL DEFAULT 0) --GUARDA LA SUMA DE LOS UNLIKES 
	

CREATE TABLE USER_MSTR(
	USER_ID INT IDENTITY(1,1) PRIMARY KEY
	,USER_NAME VARCHAR(10) NOT NULL DEFAULT ''
	,USER_PASS VARCHAR(10) NOT NULL DEFAULT '')
	

CREATE TABLE COMENTARIO(
	COMENTARIO_ID INT IDENTITY(1,1) PRIMARY KEY
	,COMENTARIO_DESC VARCHAR(500) NOT NULL DEFAULT ''
	,VIEWER_NICKNAME VARCHAR(25) NOT NULL DEFAULT ''
	,OBRA_ID INT NOT NULL DEFAULT 0
	,FECHA_COM VARCHAR(10) NOT NULL DEFAULT ''
	,HORA_COM VARCHAR(10) NOT NULL DEFAULT '')
	

CREATE TABLE ME_GUSTA(
	MEGUSTA_ID INT IDENTITY(1,1) PRIMARY KEY
	,VIEWER_NICKNAME VARCHAR(25) NOT NULL DEFAULT ''
	,OBRA_ID INT NOT NULL DEFAULT 0
	,LIKE VARCHAR(10) NOT NULL DEFAULT '') -- 'TRUE' O 'FALSE'
	
	
CREATE TABLE MAIN_CONFIG(
	MAIN_ID INT IDENTITY(1,1) PRIMARY KEY
	,FACEBOOK_LINK VARCHAR(100) NOT NULL DEFAULT ''
	,INSTAGRAM_LINK VARCHAR(100) NOT NULL DEFAULT ''
	,EMAIL VARCHAR(100) NOT NULL DEFAULT '')
	

CREATE TABLE TIPO_OBRA(
	TIPO_OBRA_ID INT IDENTITY(1,1) PRIMARY KEY
	,TIPO_DESC VARCHAR(100) NOT NULL DEFAULT '')

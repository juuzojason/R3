-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 30-04-2025 a las 03:24:31
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `r3_database`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `articulos`
--

CREATE TABLE `articulos` (
  `IdArt` int(11) NOT NULL,
  `ImagenArt` varchar(255) NOT NULL,
  `NombreArt` varchar(30) NOT NULL,
  `CantidadArt` int(11) NOT NULL,
  `PrecioArt` int(11) NOT NULL,
  `DescripcionArt` varchar(100) NOT NULL,
  `Fecha_PublicacionArt` datetime NOT NULL,
  `Tipo_oferta` varchar(50) NOT NULL,
  `EstadoArt` tinyint(1) NOT NULL,
  `IdVen` int(11) DEFAULT NULL,
  `IdDon` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `articulos_categorias`
--

CREATE TABLE `articulos_categorias` (
  `IdArt_Cat` int(11) NOT NULL,
  `IdCat` int(11) NOT NULL,
  `IdArt` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `IdCat` int(11) NOT NULL,
  `NombreCat` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentarios_foros`
--

CREATE TABLE `comentarios_foros` (
  `IdComen` int(11) NOT NULL,
  `Contenido` varchar(100) NOT NULL,
  `Fechan_Comentario` date NOT NULL,
  `idFor` int(11) NOT NULL,
  `IdUsu` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `compradores`
--

CREATE TABLE `compradores` (
  `IdCom` int(11) NOT NULL,
  `IdUsu` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `compradores`
--

INSERT INTO `compradores` (`IdCom`, `IdUsu`) VALUES
(1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `direcciones`
--

CREATE TABLE `direcciones` (
  `Id` int(11) NOT NULL,
  `direccionDir` varchar(50) NOT NULL,
  `EstadoDir` tinyint(1) NOT NULL,
  `IdPer` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `direcciones`
--

INSERT INTO `direcciones` (`Id`, `direccionDir`, `EstadoDir`, `IdPer`) VALUES
(1, 'Calle 8', 1, 1),
(2, 'Calle 8', 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `donadores`
--

CREATE TABLE `donadores` (
  `IdDon` int(11) NOT NULL,
  `IdUsu` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `donadores`
--

INSERT INTO `donadores` (`IdDon`, `IdUsu`) VALUES
(1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `foros`
--

CREATE TABLE `foros` (
  `IdFor` int(11) NOT NULL,
  `NombreFor` varchar(30) NOT NULL,
  `DescripcionFor` varchar(100) NOT NULL,
  `Fecha_CreacionFor` date NOT NULL,
  `IdUsu` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `nrotelefonos`
--

CREATE TABLE `nrotelefonos` (
  `IdTel` int(11) NOT NULL,
  `NroTelefono` decimal(10,0) NOT NULL,
  `EstadoNro` tinyint(1) NOT NULL,
  `IdPer` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `nrotelefonos`
--

INSERT INTO `nrotelefonos` (`IdTel`, `NroTelefono`, `EstadoNro`, `IdPer`) VALUES
(1, 3005259820, 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `obter_articulos`
--

CREATE TABLE `obter_articulos` (
  `IdObT` int(11) NOT NULL,
  `IdArt` int(11) NOT NULL,
  `IdCom` int(11) DEFAULT NULL,
  `IdDon` int(11) DEFAULT NULL,
  `IdVen` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personas`
--

CREATE TABLE `personas` (
  `IdPer` int(11) NOT NULL,
  `NroIdentidadPer` varchar(10) NOT NULL,
  `NombrePer` varchar(50) NOT NULL,
  `ApellidoPer` varchar(50) NOT NULL,
  `FechaNacPer` date NOT NULL,
  `EstadoPer` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `personas`
--

INSERT INTO `personas` (`IdPer`, `NroIdentidadPer`, `NombrePer`, `ApellidoPer`, `FechaNacPer`, `EstadoPer`) VALUES
(1, '1007326971', 'Deivid Stiven', 'Garcia Giraldo', '2001-12-13', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `IdUsu` int(11) NOT NULL,
  `CorreoUsu` varchar(50) NOT NULL,
  `ContrasenaUsu` varchar(20) NOT NULL,
  `EstadoUsu` tinyint(1) NOT NULL,
  `Fecha_Registro` date NOT NULL,
  `IdPer` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`IdUsu`, `CorreoUsu`, `ContrasenaUsu`, `EstadoUsu`, `Fecha_Registro`, `IdPer`) VALUES
(1, 'stivengarcia2001@email.com', 'contrasena123', 1, '2025-04-29', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vendedores`
--

CREATE TABLE `vendedores` (
  `IdVen` int(11) NOT NULL,
  `IdUsu` int(11) NOT NULL,
  `Reputacion` decimal(1,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `vendedores`
--

INSERT INTO `vendedores` (`IdVen`, `IdUsu`, `Reputacion`) VALUES
(1, 1, 5);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `articulos`
--
ALTER TABLE `articulos`
  ADD PRIMARY KEY (`IdArt`),
  ADD KEY `IdVen` (`IdVen`),
  ADD KEY `IdDon` (`IdDon`);

--
-- Indices de la tabla `articulos_categorias`
--
ALTER TABLE `articulos_categorias`
  ADD PRIMARY KEY (`IdArt_Cat`),
  ADD KEY `IdCat` (`IdCat`),
  ADD KEY `IdArt` (`IdArt`);

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`IdCat`);

--
-- Indices de la tabla `comentarios_foros`
--
ALTER TABLE `comentarios_foros`
  ADD PRIMARY KEY (`IdComen`),
  ADD KEY `IdUsu` (`IdUsu`),
  ADD KEY `idFor` (`idFor`);

--
-- Indices de la tabla `compradores`
--
ALTER TABLE `compradores`
  ADD PRIMARY KEY (`IdCom`),
  ADD KEY `IdUsu` (`IdUsu`);

--
-- Indices de la tabla `direcciones`
--
ALTER TABLE `direcciones`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `IdPer` (`IdPer`);

--
-- Indices de la tabla `donadores`
--
ALTER TABLE `donadores`
  ADD PRIMARY KEY (`IdDon`),
  ADD KEY `IdUsu` (`IdUsu`);

--
-- Indices de la tabla `foros`
--
ALTER TABLE `foros`
  ADD PRIMARY KEY (`IdFor`),
  ADD KEY `IdUsu` (`IdUsu`);

--
-- Indices de la tabla `nrotelefonos`
--
ALTER TABLE `nrotelefonos`
  ADD PRIMARY KEY (`IdTel`),
  ADD KEY `IdPer` (`IdPer`);

--
-- Indices de la tabla `obter_articulos`
--
ALTER TABLE `obter_articulos`
  ADD PRIMARY KEY (`IdObT`),
  ADD KEY `IdArt` (`IdArt`),
  ADD KEY `IdCom` (`IdCom`),
  ADD KEY `IdDon` (`IdDon`),
  ADD KEY `IdVen` (`IdVen`);

--
-- Indices de la tabla `personas`
--
ALTER TABLE `personas`
  ADD PRIMARY KEY (`IdPer`),
  ADD UNIQUE KEY `NroIdentidadPer` (`NroIdentidadPer`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`IdUsu`),
  ADD UNIQUE KEY `CorreoUsu` (`CorreoUsu`),
  ADD KEY `IdPer` (`IdPer`);

--
-- Indices de la tabla `vendedores`
--
ALTER TABLE `vendedores`
  ADD PRIMARY KEY (`IdVen`),
  ADD KEY `IdUsu` (`IdUsu`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `articulos`
--
ALTER TABLE `articulos`
  MODIFY `IdArt` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `articulos_categorias`
--
ALTER TABLE `articulos_categorias`
  MODIFY `IdArt_Cat` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `IdCat` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `comentarios_foros`
--
ALTER TABLE `comentarios_foros`
  MODIFY `IdComen` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `compradores`
--
ALTER TABLE `compradores`
  MODIFY `IdCom` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `direcciones`
--
ALTER TABLE `direcciones`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `donadores`
--
ALTER TABLE `donadores`
  MODIFY `IdDon` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `foros`
--
ALTER TABLE `foros`
  MODIFY `IdFor` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `nrotelefonos`
--
ALTER TABLE `nrotelefonos`
  MODIFY `IdTel` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `obter_articulos`
--
ALTER TABLE `obter_articulos`
  MODIFY `IdObT` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `personas`
--
ALTER TABLE `personas`
  MODIFY `IdPer` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `IdUsu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `vendedores`
--
ALTER TABLE `vendedores`
  MODIFY `IdVen` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `articulos`
--
ALTER TABLE `articulos`
  ADD CONSTRAINT `articulos_ibfk_1` FOREIGN KEY (`IdVen`) REFERENCES `vendedores` (`IdVen`),
  ADD CONSTRAINT `articulos_ibfk_2` FOREIGN KEY (`IdDon`) REFERENCES `donadores` (`IdDon`);

--
-- Filtros para la tabla `articulos_categorias`
--
ALTER TABLE `articulos_categorias`
  ADD CONSTRAINT `articulos_categorias_ibfk_1` FOREIGN KEY (`IdCat`) REFERENCES `categorias` (`IdCat`),
  ADD CONSTRAINT `articulos_categorias_ibfk_2` FOREIGN KEY (`IdArt`) REFERENCES `articulos` (`IdArt`);

--
-- Filtros para la tabla `comentarios_foros`
--
ALTER TABLE `comentarios_foros`
  ADD CONSTRAINT `comentarios_foros_ibfk_1` FOREIGN KEY (`IdUsu`) REFERENCES `usuarios` (`IdUsu`),
  ADD CONSTRAINT `comentarios_foros_ibfk_2` FOREIGN KEY (`idFor`) REFERENCES `foros` (`IdFor`);

--
-- Filtros para la tabla `compradores`
--
ALTER TABLE `compradores`
  ADD CONSTRAINT `compradores_ibfk_1` FOREIGN KEY (`IdUsu`) REFERENCES `usuarios` (`IdUsu`);

--
-- Filtros para la tabla `direcciones`
--
ALTER TABLE `direcciones`
  ADD CONSTRAINT `direcciones_ibfk_1` FOREIGN KEY (`IdPer`) REFERENCES `personas` (`IdPer`);

--
-- Filtros para la tabla `donadores`
--
ALTER TABLE `donadores`
  ADD CONSTRAINT `donadores_ibfk_1` FOREIGN KEY (`IdUsu`) REFERENCES `usuarios` (`IdUsu`);

--
-- Filtros para la tabla `foros`
--
ALTER TABLE `foros`
  ADD CONSTRAINT `foros_ibfk_1` FOREIGN KEY (`IdUsu`) REFERENCES `usuarios` (`IdUsu`);

--
-- Filtros para la tabla `nrotelefonos`
--
ALTER TABLE `nrotelefonos`
  ADD CONSTRAINT `nrotelefonos_ibfk_1` FOREIGN KEY (`IdPer`) REFERENCES `personas` (`IdPer`);

--
-- Filtros para la tabla `obter_articulos`
--
ALTER TABLE `obter_articulos`
  ADD CONSTRAINT `obter_articulos_ibfk_1` FOREIGN KEY (`IdArt`) REFERENCES `articulos` (`IdArt`),
  ADD CONSTRAINT `obter_articulos_ibfk_2` FOREIGN KEY (`IdCom`) REFERENCES `compradores` (`IdCom`),
  ADD CONSTRAINT `obter_articulos_ibfk_3` FOREIGN KEY (`IdDon`) REFERENCES `donadores` (`IdDon`),
  ADD CONSTRAINT `obter_articulos_ibfk_4` FOREIGN KEY (`IdVen`) REFERENCES `vendedores` (`IdVen`);

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`IdPer`) REFERENCES `personas` (`IdPer`);

--
-- Filtros para la tabla `vendedores`
--
ALTER TABLE `vendedores`
  ADD CONSTRAINT `vendedores_ibfk_1` FOREIGN KEY (`IdUsu`) REFERENCES `usuarios` (`IdUsu`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

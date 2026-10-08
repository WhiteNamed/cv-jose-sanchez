# Curriculum Web Multipágina - José Sánchez Zumel

Este proyecto contiene el sitio web personal/currículum multipágina interactivo de **José Sánchez Zumel**, Administrador de Sistemas Informáticos en Red.

## 📁 Estructura del Proyecto

- `index.html` -> Página principal (Inicio, Mi Perfil, Sobre Mí, Resumen IT).
- `experiencia.html` -> Historial laboral detallado (Seqond Technology, IMASTEQ, CLRNETSEC).
- `proyectos.html` -> Proyectos destacados (TFC Proxmox/Docker y Infraestructura CLR Multi-WAN).
- `formacion.html` -> Estudios académicos (IES Arquitecto Ventura Rodríguez, Universidad Alfonso X El Sabio) y matriz de habilidades técnicas.
- `contacto.html` -> Información de contacto directo (Teléfono, Email, Ubicación) y formulario de mensaje.
- `styles.css` -> Estilos CSS centralizados (Efectos Matrix, Glassmorphic cards, tipografía estilo IBM logo).
- `script.js` -> JavaScript linkado en la cabecera `<head>` con `defer` (Navegación activa, Lluvia Matrix en Canvas Fallback, Copiado al portapapeles y formulario).

## 🎬 Fondo de Vídeo Matrix & Fallback Canvas

1. Para usar un vídeo MP4 real de fondo, coloca tu archivo de vídeo con el nombre **`matrix-bg.mp4`** en la misma carpeta raíz del proyecto.
2. Si no dispones del archivo MP4 o el navegador no lo reproduce, el archivo **`script.js`** ejecutará automáticamente un canvas interactivo con la lluvia digital de código Matrix en tiempo real.

## 🔤 Tipografía Estilo Logo IBM

El nombre del titular **JOSÉ SÁNCHEZ ZUMEL** está formateado en CSS mediante un degradado repetitivo con recorte de texto (`repeating-linear-gradient` con `-webkit-background-clip: text`), imitando las barras/rallas horizontales características del icónico logotipo de IBM.

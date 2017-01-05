/*
 * Copyright (c) 2012 Adobe Systems Incorporated. All rights reserved.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 *
 */

/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define */

define({

    "GENERIC_ERROR": "(error {0})",
    "NOT_FOUND_ERR": "El archivo/directorio no pudo ser encontrado.",
    "NOT_READABLE_ERR": "El archivo/directorio no pudo ser leído.",
    "EXCEEDS_MAX_FILE_SIZE": "Archivo de tamaño mayor a {0} MB no pueden ser abiertos en {APP_NAME}.",
    "FILE_EXISTS_ERR": "El archivo o directorio ya existe.",
    "FILE": "archivo",
    "FILE_TITLE": "Archivo",
    "DIRECTORY": "directorio",
    "DIRECTORY_TITLE": "Directorio",
    "DIRECTORY_NAMES_LEDE": "Nombres de directorio",
    "FILENAMES_LEDE": "Nombres de archivo",
    "FILENAME": "Nombre de archivo",
    "DIRECTORY_NAME": "Nombre de directorio",
    "OPEN_DIALOG_ERROR": "Un error ocurrió al mostrar el diálogo de abrir archivo. (error {0})",
    "READ_DIRECTORY_ENTRIES_ERROR": "Un error ocurrió al leer los contenidos del directorio &lt;span class=&#39;dialog-filename&#39;&gt;{0}&lt;/span&gt;. (error {1})",
    "ERROR_OPENING_FILE_TITLE": "Error al abrir el archivo",
    "ERROR_OPENING_FILE": "Ocurrió un error al intentar abrir el archivo &lt;span class=&#39;dialog-filename&#39;&gt;{0}&lt;/span&gt;. {1}",
    "ERROR_OPENING_FILES": "Ocurrió un error al intentar abrir los siguientes archivos:",
    "ERROR_SAVING_FILE_TITLE": "Error al guardar el archivo",
    "ERROR_SAVING_FILE": "Ocurrió un error al intentar guardar el archivo &lt;span class=&#39;dialog-filename&#39;&gt;{0}&lt;/span&gt;. {1}",
    "ERROR_RENAMING_FILE_TITLE": "Error al renombrar el archivo",
    "ERROR_RENAMING_DIRECTORY_TITLE": "Error al renombrar el directorio",
    "ERROR_RENAMING_FILE": "Ocurrió un error al intentar renombrar el archivo &lt;span class=&#39;dialog-filename&#39;&gt;{0}&lt;/span&gt;. {1}",
    "ERROR_RENAMING_DIRECTORY": "Ocurrió un error al intentar renombrar el directorio &lt;span class=&#39;dialog-filename&#39;&gt;{0}&lt;/span&gt;. {1}",
    "ERROR_DELETING_FILE_TITLE": "Error al eliminar el archivo",
    "ERROR_DELETING_DIRECTORY_TITLE": "Error al eliminar el directorio",
    "ERROR_DELETING_FILE": "Ocurrió un error al intentar eliminar el archivo &lt;span class=&#39;dialog-filename&#39;&gt;{0}&lt;/span&gt;. {1}",
    "ERROR_DELETING_DIRECTORY": "Ocurrió un error al intentar eliminar el directorio &lt;span class=&#39;dialog-filename&#39;&gt;{0}&lt;/span&gt;. {1}",
    "INVALID_FILENAME_TITLE": "Nombre de archivo inválido",
    "INVALID_DIRNAME_TITLE": "Nombre de directorio inválido",
    "INVALID_FILENAME_MESSAGE": "Los nombres de archivo no pueden usar palabras reservadas por el sistema, terminar con puntos (.) o usar cualquiera de los siguientes caracteres: &lt;code class=&#39;emphasized&#39;&gt;{1}&lt;/code&gt;",
    "INVALID_DIRNAME_MESSAGE": "Los nombres de directorios no pueden usar palabras reservadas por el sistema, terminar con puntos (.) o usar cualquiera de los siguientes caracteres: &lt;code class=&#39;emphasized&#39;&gt;{1}&lt;/code&gt;",
    "ENTRY_WITH_SAME_NAME_EXISTS": "Un directorio con el nombre &lt;span class=&#39;dialog-filename&#39;&gt;{0}&lt;/span&gt; ya existe.",
    "ERROR_CREATING_FILE_TITLE": "Error al crear el archivo",
    "ERROR_CREATING_DIRECTORY_TITLE": "Error al crear el directorio",
    "ERROR_CREATING_FILE": "Ocurrió un error al intentar crear el archivo &lt;span class=&#39;dialog-filename&#39;&gt;{1}&lt;/span&gt;. {2}",
    "ERROR_CREATING_DIRECTORY": "Ocurrió un error al intentar crear el directorio &lt;span class=&#39;dialog-filename&#39;&gt;{1}&lt;/span&gt;. {2}",
    "ERROR_MAX_FILES_TITLE": "Error al indexar archivos",
    "EXT_MODIFIED_TITLE": "Cambios externos",
    "EXT_MODIFIED_WARNING": "&lt;span class=&#39;dialog-filename&#39;&gt;{0}&lt;/span&gt; ha sido modificado en el disco fuera de {APP_NAME}.&lt;br /&gt;&lt;br /&gt;¿Quieres guardar el archivo y sobreescribir esos cambios?",
    "EXT_MODIFIED_MESSAGE": "&lt;span class=&#39;dialog-filename&#39;&gt;{0}&lt;/span&gt; ha sido modificado en el disco fuera de {APP_NAME}, pero también tiene cambios sin guardar en {APP_NAME}.&lt;br /&gt;&lt;br /&gt;¿Qué versión quieres mantener?",
    "EXT_DELETED_MESSAGE": "&lt;span class=&#39;dialog-filename&#39;&gt;{0}&lt;/span&gt; ha sido eliminado del disco fuera de {APP_NAME}, pero tiene cambios sin guardar en {APP_NAME}.&lt;br /&gt;&lt;br /&gt;¿Quieres conservar tus cambios?",
    "CONFIRM_FOLDER_DELETE_TITLE": "Confirmar eliminación",
    "CONFIRM_FOLDER_DELETE": "",
    "FILE_DELETED_TITLE": "Archivo eliminado",
    "DONE": "Hecho",
    "OK": "Aceptar",
    "CANCEL": "Cancelar",
    "SAVE_AND_OVERWRITE": "Sobrescribir",
    "DELETE": "Eliminar",
    "BUTTON_YES": "Sí",
    "BUTTON_NO": "No",
    "ERROR_QUICK_EDIT_PROVIDER_NOT_FOUND": "No hay edición rápida disponible para la posición actual del cursor",
    "ERROR_CSSQUICKEDIT_BETWEENCLASSES": "Edición rápida de CSS: coloca el cursor en un solo nombre de clase",
    "ERROR_CSSQUICKEDIT_CLASSNOTFOUND": "Edición rápida de CSS: atributo de clase incompleto",
    "ERROR_CSSQUICKEDIT_IDNOTFOUND": "Edición rápida de CSS: atributo id incompleto",
    "ERROR_CSSQUICKEDIT_UNSUPPORTEDATTR": "Edición rápida de CSS: ubique el cursor en una etiqueta, clase o id",
    "ERROR_TIMINGQUICKEDIT_INVALIDSYNTAX": "Edición rápida de función de temporizador CSS: sintaxis inválida",
    "ERROR_JSQUICKEDIT_FUNCTIONNOTFOUND": "Edición rápida de JS: coloca el cursor en el nombre de la función",
    "BUTTON_NEW_RULE": "Nueva regla",
    "ERROR_QUICK_DOCS_PROVIDER_NOT_FOUND": "No hay documentos rápidos disponibles para la posición actual del cursor",
    "CMD_FILE_NEW": "Nuevo archivo",
    "CMD_FILE_NEW_FOLDER": "Nueva carpeta",
    "CMD_FILE_RENAME": "Renombrar",
    "CMD_FILE_DELETE": "Eliminar",
    "CMD_CUT": "Cortar",
    "CMD_COPY": "Copiar",
    "CMD_PASTE": "Pegar",
    "CMD_SELECT_ALL": "Seleccionar todo",
    "CMD_TOGGLE_QUICK_EDIT": "Edición rápida",
    "CMD_TOGGLE_QUICK_DOCS": "Documentos rápidos",
    "DND_MAX_FILE_SIZE_EXCEEDED": "el archivo excede el tamaño máximo soportado: 3MB",
    "DND_UNSUPPORTED_FILE_TYPE": "tipo de archivo no soportado",
    "DND_ERROR_UNZIP": "no se pudo descomprimir el archivo zip",
    "DND_ERROR_UNTAR": "no se pudo descomprimir el archivo tar",
    "DND_SUCCESS_UNZIP_TITLE": "Descompresión del zip exitosa",
    "DND_SUCCESS_UNTAR_TITLE": "Descompresión del tar exitosa",
    "DND_SUCCESS_UNZIP": "Se descomprimió &lt;b&gt;{0}&lt;/b&gt; exitosamente.",
    "DND_SUCCESS_UNTAR": "Se descomprimió &lt;b&gt;{0}&lt;/b&gt; exitosamente.",
    "COLOR_EDITOR_CURRENT_COLOR_SWATCH_TIP": "Color actual",
    "COLOR_EDITOR_ORIGINAL_COLOR_SWATCH_TIP": "Color original",
    "COLOR_EDITOR_RGBA_BUTTON_TIP": "Formato RGBa",
    "COLOR_EDITOR_HEX_BUTTON_TIP": "Formato Hex",
    "COLOR_EDITOR_HSLA_BUTTON_TIP": "Formato HSLa",
    "COLOR_EDITOR_USED_COLOR_TIP_SINGULAR": "{0} (Usado {1} vez)",
    "COLOR_EDITOR_USED_COLOR_TIP_PLURAL": "{0} (Usado {1} veces)",
    "CMD_JUMPTO_DEFINITION": "Saltar a la definición",
    "CMD_SHOW_PARAMETER_HINT": "",
    "NO_ARGUMENTS": "&lt;sin parámetros&gt;",
    "DETECTED_EXCLUSION_TITLE": "Problema de interferencia de archivo JavaScript",
    "CMD_ENABLE_QUICK_VIEW": "Vista rápida al colocar el ratón",
    "DOCS_MORE_LINK": "Leer más",
    "UPLOAD_FILES_DIALOG_HEADER": "Subir archivos",
    "DRAG_AREA_UPLOAD_FILES_DIALOG_TEXT": "...o arrastrar archivos aquí.",
    "DROP_AREA_UPLOAD_FILES_DIALOG_TEXT": "Ok, ¡suelta los archivos!",
    "UPLOADING_INDICATOR": "Subiendo...",
    "BUTTON_FROM_YOUR_COMPUTER": "De tu computador...",
    "TAKE_A_SELFIE": "Tomar una selfie...",
    "CMD_MOVE_FILE": "Mover a...",
    "PROJECT_ROOT": "Raíz del proyecto",
    "PICK_A_FOLDER_TO_MOVE_TO": "Elegir una carpeta",
    "ERROR_MOVING_FILE_DIALOG_HEADER": "Error al mover",
    "UNEXPECTED_ERROR_MOVING_FILE": "Un error inesperado ocurrió al intentar mover {0} a {1}",
    "ERROR_MOVING_FILE_SAME_NAME": "Un archivo o carpeta con el nombre {0} ya existe en{1}. Considera renombrar alguno para continuar."
});

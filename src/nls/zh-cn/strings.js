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

    "GENERIC_ERROR": "(错误 {0})",
    "NOT_FOUND_ERR": "该文件/目录未找到。",
    "NOT_READABLE_ERR": "该文件/目录无法读取。",
    "EXCEEDS_MAX_FILE_SIZE": "大于 {0} MB 的文件无法在 {APP_NAME} 中打开。",
    "NO_MODIFICATION_ALLOWED_ERR": "无法修改此目录。",
    "NO_MODIFICATION_ALLOWED_ERR_FILE": "你没有权限做此次修改。",
    "CONTENTS_MODIFIED_ERR": "该文件已经在 {APP_NAME} 之外被修改。",
    "UNSUPPORTED_ENCODING_ERR": "{APP_NAME} 暂时仅支持UTF-8编码的文本文档。",
    "FILE_EXISTS_ERR": "该文件或目录已经存在。",
    "FILE": "文件",
    "FILE_TITLE": "文件",
    "DIRECTORY": "目录",
    "DIRECTORY_TITLE": "目录",
    "DIRECTORY_NAMES_LEDE": "目录名",
    "FILENAMES_LEDE": "文件名",
    "FILENAME": "文件名",
    "DIRECTORY_NAME": "目录名",
    "ERROR_LOADING_PROJECT": "无法加载此项目。",
    "OPEN_DIALOG_ERROR": "显示打开文件对话框时出错。(错误 {0})",
    "REQUEST_NATIVE_FILE_SYSTEM_ERROR": "打开目录 &amp;lt;span class=&amp;#39;dialog-filename&amp;#39;&amp;gt;{0}&amp;lt;/span&amp;gt; 发生错误。 (错误 {1})",
    "READ_DIRECTORY_ENTRIES_ERROR": "读取目录 &lt;span class=&#39;dialog-filename&#39;&gt;{0}&lt;/span&gt; 的内容时出错。(error {1})",
    "ERROR_OPENING_FILE_TITLE": "打开文件出错",
    "ERROR_OPENING_FILE": "尝试打开文件 &lt;span class=&#39;dialog-filename&#39;&gt;{0}&lt;/span&gt; 时出错。{1}",
    "ERROR_OPENING_FILES": "尝试打开下列文件时出错：",
    "ERROR_RELOADING_FILE_TITLE": "重新加载文件时发生错误",
    "ERROR_RELOADING_FILE": "尝试重新加载文件 &amp;lt;span class=&amp;#39;dialog-filename&amp;#39;&amp;gt;{0}&amp;lt;/span&amp;gt; 时发生错误。 {1}",
    "ERROR_SAVING_FILE_TITLE": "保存文件出错",
    "ERROR_SAVING_FILE": "尝试保存文件 &lt;span class=&#39;dialog-filename&#39;&gt;{0}&lt;/span&gt; 时出错。{1}",
    "ERROR_RENAMING_FILE_TITLE": "重命名{0}出错",
    "ERROR_RENAMING_FILE": "尝试重命名 {2} &lt;span class=&#39;dialog-filename&#39;&gt;{0}&lt;/span&gt; 时出错。{1}",
    "ERROR_DELETING_FILE_TITLE": "删除{0}出错",
    "ERROR_DELETING_FILE": "尝试删除 {2} &lt;span class=&#39;dialog-filename&#39;&gt;{0}&lt;/span&gt; 时出错。{1}",
    "INVALID_FILENAME_TITLE": "无效的{0}",
    "INVALID_FILENAME_MESSAGE": "{0} 不能使用任何系统保留字，不能以点 (.) 结束，也不能使用下列字符：&lt;code class=&#39;emphasized&#39;&gt;{1}&lt;/code&gt;",
    "ENTRY_WITH_SAME_NAME_EXISTS": "一个文件或目录的名称 &lt;span class=&#39;dialog-filename&#39;&gt;{0}&lt;/span&gt; 已经存在。",
    "ERROR_CREATING_FILE_TITLE": "创建{0}出错",
    "ERROR_CREATING_FILE": "尝试创建 {0} &lt;span class=&#39;dialog-filename&#39;&gt;{1}&lt;/span&gt; 时出错。{2}",
    "ERROR_MIXED_DRAGDROP": "无法在打开文件夹的同时打开其他文件",
    "ERROR_KEYMAP_TITLE": "读取用户键映射错误",
    "ERROR_KEYMAP_CORRUPT": "键映射文件不是有效的 JSON 格式。即将打开配置文件以便您修正。",
    "ERROR_LOADING_KEYMAP": "不能打开你的键映射文件，因为它不是 UTF-8 编码的文本文件。",
    "ERROR_RESTRICTED_COMMANDS": "不能将快捷键重新分配给这些命令： {0}",
    "ERROR_RESTRICTED_SHORTCUTS": "不能重新分配这些快捷键： {0}",
    "ERROR_MULTIPLE_SHORTCUTS": "这些命令定义了多个快捷键： {0}",
    "ERROR_DUPLICATE_SHORTCUTS": "这些快捷键上指定了多个命令： {0}",
    "ERROR_INVALID_SHORTCUTS": "这些快捷键是无效的： {0}",
    "ERROR_NONEXISTENT_COMMANDS": "快捷键指向了并不存在的命令： {0}",
    "ERROR_PREFS_CORRUPT_TITLE": "读取配置错误",
    "ERROR_PREFS_CORRUPT": "您的配置文件不是有效的 JSON 格式. 即将打开配置文件以便您修正. 为使更改生效, 您需要重启 {APP_NAME}.",
    "ERROR_IN_BROWSER_TITLE": "囧! {APP_NAME} 暂无法在浏览器中运行。",
    "ERROR_IN_BROWSER": "{APP_NAME} 是建立在 HTML 上的一个桌面程序, 你可以用它修改本地文件. 可以前往此处下载系统对应的版本&amp;lt;b&amp;gt;github.com/adobe/brackets-shell&amp;lt;/b&amp;gt;, 然后重新运行 {APP_NAME}.",
    "ERROR_MAX_FILES_TITLE": "索引文件出错",
    "ERROR_MAX_FILES": "索引文件过多, 可能无法通过索引查找文件。",
    "ERROR_LAUNCHING_BROWSER_TITLE": "启动浏览器失败",
    "ERROR_CANT_FIND_CHROME": "没有找到 Google Chrome 浏览器, 请确定您已安装了 Chrome 浏览器。",
    "ERROR_LAUNCHING_BROWSER": "启动浏览器时发生错误。 (错误 {0})",
    "LIVE_DEVELOPMENT_ERROR_TITLE": "实时预览错误",
    "LIVE_DEVELOPMENT_RELAUNCH_TITLE": "正在连接浏览器",
    "LIVE_DEVELOPMENT_ERROR_MESSAGE": "要使用实时预览, 需要重启 Chrome 并打开远程调试功能。&amp;lt;br /&amp;gt;&amp;lt;br /&amp;gt;你确定重新启动 Chrome 浏览器, 并且打开远程调试功能吗？",
    "LIVE_DEV_LOADING_ERROR_MESSAGE": "无法加载实时预览页面",
    "LIVE_DEV_NEED_HTML_MESSAGE": "打开一个 HTML 文件或确认项目中包含 index.html 文件以启动实时预览.",
    "LIVE_DEV_NEED_BASEURL_MESSAGE": "实时预览需要一个服务端, 您需要为这个项目指定一个基本 URL 地址。 (如http://127.0.0.1/)",
    "LIVE_DEV_SERVER_NOT_READY_MESSAGE": "试图启动实时预览 HTTP 服务器时出现错误, 请再试一次。",
    "LIVE_DEVELOPMENT_INFO_TITLE": "欢迎使用实时预览！",
    "LIVE_DEVELOPMENT_INFO_MESSAGE": "{APP_NAME} 将通过实时预览连接至你的浏览器. 你的 HTML 文件将在浏览器中预览, 修改你的代码将会即时更新你浏览器中的预览。&amp;lt;br /&amp;gt;&amp;lt;br /&amp;gt;目前版本的 {APP_NAME} 实时预览只能运行于 &amp;lt;strong&amp;gt;Google Chrome&amp;lt;/strong&amp;gt; 浏览器更新实时编辑时的 &amp;lt;strong&amp;gt;CSS 和 HTML 文件&amp;lt;/strong&amp;gt;，当你保存了 JavaScript 文件, 实时预览将在浏览器中重新加载它们。&amp;lt;br /&amp;gt;&amp;lt;br /&amp;gt;(此消息仅会出现一次)",
    "LIVE_DEVELOPMENT_TROUBLESHOOTING": "更多信息, 请参考&amp;lt;a href=&amp;#39;{0}&amp;#39; title=&amp;#39;{0}&amp;#39;&amp;gt;实时预览连接错误信息&amp;lt;/a&amp;gt;。",
    "LIVE_DEV_STATUS_TIP_NOT_CONNECTED": "实时预览",
    "LIVE_DEV_STATUS_TIP_PROGRESS1": "实时预览: 连接中…",
    "LIVE_DEV_STATUS_TIP_PROGRESS2": "实时预览: 初始化…",
    "LIVE_DEV_STATUS_TIP_CONNECTED": "断开实时预览",
    "LIVE_DEV_STATUS_TIP_OUT_OF_SYNC": "实时预览 (保存文件并刷新)",
    "LIVE_DEV_STATUS_TIP_SYNC_ERROR": "实时预览 (由于语法错误没有更新)",
    "LIVE_DEV_DETACHED_REPLACED_WITH_DEVTOOLS": "由于浏览器开发人员工具已打开, 实时预览已关闭。",
    "LIVE_DEV_DETACHED_TARGET_CLOSED": "由于浏览器中页面已关闭, 实时预览已关闭",
    "LIVE_DEV_NAVIGATED_AWAY": "由于浏览器打开一个不属于本项目的页面, 实时预览已关闭",
    "LIVE_DEV_CLOSED_UNKNOWN_REASON": "未知原因 ({0}) 导致实时预览关闭",
    "SAVE_CLOSE_TITLE": "保存更新",
    "SAVE_CLOSE_MESSAGE": "保存 &amp;lt;span class=&amp;#39;dialog-filename&amp;#39;&amp;gt;{0}&amp;lt;/span&amp;gt; 文件中所做的修改？",
    "SAVE_CLOSE_MULTI_MESSAGE": "是否保存以下文件的修改？",
    "EXT_MODIFIED_TITLE": "外部变化",
    "CONFIRM_FOLDER_DELETE_TITLE": "确认删除",
    "CONFIRM_FOLDER_DELETE": "您确定要删除文件夹 &lt;span class=&#39;dialog-filename&#39;&gt;{0}&lt;/span&gt;？",
    "FILE_DELETED_TITLE": "文件已删除",
    "EXT_MODIFIED_WARNING": "&lt;span class=&#39;dialog-filename&#39;&gt;{0}&lt;/span&gt; 已在 {APP_NAME} 外部的磁盘上被修改。&lt;br /&gt;&lt;br /&gt;您要保存文件并覆盖这些更改吗？",
    "EXT_MODIFIED_MESSAGE": "&lt;span class=&#39;dialog-filename&#39;&gt;{0}&lt;/span&gt; 已在 {APP_NAME} 外部的磁盘上被修改，但 {APP_NAME} 中还有未保存的更改。&lt;br /&gt;&lt;br /&gt;您要保留哪个版本？",
    "EXT_DELETED_MESSAGE": "&lt;span class=&#39;dialog-filename&#39;&gt;{0}&lt;/span&gt; 已在 {APP_NAME} 外部的磁盘上被修改，但 {APP_NAME} 中有未保存的更改。&lt;br /&gt;&lt;br /&gt;您要保留您的更改吗？",
    "DONE": "完成",
    "OK": "确定",
    "CANCEL": "取消",
    "DONT_SAVE": "不要保存",
    "SAVE": "保存",
    "SAVE_AS": "另存为…",
    "SAVE_AND_OVERWRITE": "覆盖",
    "DELETE": "删除",
    "BUTTON_YES": "是",
    "BUTTON_NO": "否",
    "FIND_MATCH_INDEX": "{1} 条中的 {0} 条",
    "FIND_NO_RESULTS": "未找到匹配项",
    "FIND_QUERY_PLACEHOLDER": "查找…",
    "REPLACE_PLACEHOLDER": "替换为…",
    "BUTTON_REPLACE_ALL": "全部…",
    "BUTTON_REPLACE_ALL_IN_FILES": "替换…",
    "BUTTON_REPLACE": "替换",
    "BUTTON_NEXT": "▶",
    "BUTTON_PREV": "◀",
    "BUTTON_NEXT_HINT": "下一个匹配项",
    "BUTTON_PREV_HINT": "上一个匹配项",
    "BUTTON_CASESENSITIVE_HINT": "区分大小写",
    "BUTTON_REGEXP_HINT": "正则表达式",
    "REPLACE_WITHOUT_UNDO_WARNING_TITLE": "替换(无法撤销)",
    "REPLACE_WITHOUT_UNDO_WARNING": "由于多个文件需要修改, {APP_NAME} 将修改磁盘中未打开的文件，&amp;lt;br /&amp;gt;这些修改无法撤销。",
    "BUTTON_REPLACE_WITHOUT_UNDO": "替换(无法撤销)",
    "OPEN_FILE": "打开文件",
    "SAVE_FILE_AS": "保存文件",
    "CHOOSE_FOLDER": "请选择一个目录",
    "RELEASE_NOTES": "发行说明",
    "NO_UPDATE_TITLE": "已更新!",
    "NO_UPDATE_MESSAGE": "正在使用最新版本的 {APP_NAME}。",
    "FIND_REPLACE_TITLE_LABEL": "替换",
    "FIND_REPLACE_TITLE_WITH": "为",
    "FIND_TITLE_LABEL": "已找到",
    "FIND_TITLE_SUMMARY": "&amp;amp;mdash; {0} {1} {2} 于 {3}",
    "FIND_NUM_FILES": "{0} {1}",
    "FIND_IN_FILES_SCOPED": "在 &amp;lt;span class=&amp;#39;dialog-filename&amp;#39;&amp;gt;{0}&amp;lt;/span&amp;gt; 中",
    "FIND_IN_FILES_NO_SCOPE": "在项目中",
    "FIND_IN_FILES_ZERO_FILES": "筛选条件排除了所有文件 {0}",
    "FIND_IN_FILES_FILE": "个文件",
    "FIND_IN_FILES_FILES": "个文件",
    "FIND_IN_FILES_MATCH": "个匹配",
    "FIND_IN_FILES_MATCHES": "个匹配",
    "FIND_IN_FILES_MORE_THAN": "超过 ",
    "FIND_IN_FILES_PAGING": "{0}&amp;amp;mdash;{1}",
    "FIND_IN_FILES_FILE_PATH": "&amp;lt;span class=&amp;#39;dialog-filename&amp;#39;&amp;gt;{0}&amp;lt;/span&amp;gt; {2} &amp;lt;span class=&amp;#39;dialog-path&amp;#39;&amp;gt;{1}&amp;lt;/span&amp;gt;",
    "FIND_IN_FILES_EXPAND_COLLAPSE": "按住 Ctrl/Cmd 键以便展开/折叠全部结果",
    "REPLACE_IN_FILES_ERRORS_TITLE": "替换出现错误",
    "REPLACE_IN_FILES_ERRORS": "以下文件未被修改，可能是搜索后发生变更或无法写入。",
    "ERROR_FETCHING_UPDATE_INFO_TITLE": "获取更新信息失败",
    "ERROR_FETCHING_UPDATE_INFO_MSG": "无法从服务器获取最新的更新信息. 请确认你的电脑已经连接互联网, 然后再次尝试重新获取！",
    "NEW_FILE_FILTER": "新建排除规则…",
    "CLEAR_FILE_FILTER": "不排除文件",
    "NO_FILE_FILTER": "没有文件被排除",
    "EXCLUDE_FILE_FILTER": "排除 {0}",
    "EDIT_FILE_FILTER": "编辑…",
    "FILE_FILTER_DIALOG": "编辑过滤规则",
    "FILE_FILTER_INSTRUCTIONS": "根据下列匹配规则排除文件或文件夹, 匹配规则可以是文件名或其子串, 或使用 &amp;lt;a href=&amp;#39;{0}&amp;#39; title=&amp;#39;{0}&amp;#39;&amp;gt;globs&amp;lt;/a&amp;gt;，每行输入一条规则。",
    "FILTER_NAME_PLACEHOLDER": "命名过滤规则 (可选)",
    "FILE_FILTER_CLIPPED_SUFFIX": "及另外 {0} 类",
    "FILTER_COUNTING_FILES": "统计文件数目…",
    "FILTER_FILE_COUNT": "Allows {0} of {1} files {2}",
    "FILTER_FILE_COUNT_ALL": "Allows all {0} files {1}",
    "ERROR_QUICK_EDIT_PROVIDER_NOT_FOUND": "当前光标位置无快速编辑可用",
    "ERROR_CSSQUICKEDIT_BETWEENCLASSES": "CSS 快速编辑：将光标放在单个 class 名称处",
    "ERROR_CSSQUICKEDIT_CLASSNOTFOUND": "CSS 快速编辑：不完整的 class 属性",
    "ERROR_CSSQUICKEDIT_IDNOTFOUND": "CSS 快速编辑：不完整的 id 属性",
    "ERROR_CSSQUICKEDIT_UNSUPPORTEDATTR": "CSS 快速编辑：将光标放在 tag、class 或 id 处",
    "ERROR_TIMINGQUICKEDIT_INVALIDSYNTAX": "CSS Timing Function 快速编辑：无效语法",
    "ERROR_JSQUICKEDIT_FUNCTIONNOTFOUND": "JS 快速编辑：将光标放在函数名称",
    "ERROR_QUICK_DOCS_PROVIDER_NOT_FOUND": "当前光标的位置无快速文档可用",
    "PROJECT_LOADING": "载入中…",
    "UNTITLED": "无标题",
    "WORKING_FILES": "工作区",
    "TOP": "上",
    "BOTTOM": "下",
    "LEFT": "左",
    "RIGHT": "右",
    "CMD_SPLITVIEW_NONE": "单窗口",
    "CMD_SPLITVIEW_VERTICAL": "垂直分割",
    "CMD_SPLITVIEW_HORIZONTAL": "水平分割",
    "SPLITVIEW_MENU_TOOLTIP": "垂直/水平分割编辑器窗口",
    "GEAR_MENU_TOOLTIP": "配置工作区",
    "SPLITVIEW_INFO_TITLE": "已经打开",
    "SPLITVIEW_MULTIPANE_WARNING": "该文件已经在编辑器的另一个窗格中打开。{APP_NAME} 后续会加上同文件多窗格打开的支持。在此之前，文件只会显示在已打开的窗格中。&amp;lt;br /&amp;gt;&amp;lt;br /&amp;gt;（本信息只显示一次。）",
    "KEYBOARD_CTRL": "Ctrl",
    "KEYBOARD_SHIFT": "Shift",
    "KEYBOARD_SPACE": "空格",
    "STATUSBAR_CURSOR_POSITION": "行 {0}, 列 {1}",
    "STATUSBAR_SELECTION_CH_SINGULAR": " — 已选中 {0} 列",
    "STATUSBAR_SELECTION_CH_PLURAL": " — 已选中 {0} 列",
    "STATUSBAR_SELECTION_LINE_SINGULAR": " — 已选中 {0} 行",
    "STATUSBAR_SELECTION_LINE_PLURAL": " — 已选中 {0} 行",
    "STATUSBAR_SELECTION_MULTIPLE": " — {0} 处选择",
    "STATUSBAR_INDENT_TOOLTIP_SPACES": "点击切换缩进为空格",
    "STATUSBAR_INDENT_TOOLTIP_TABS": "点击切换缩进为Tab",
    "STATUSBAR_INDENT_SIZE_TOOLTIP_SPACES": "点击修改缩进的空格长度",
    "STATUSBAR_INDENT_SIZE_TOOLTIP_TABS": "点击修改缩进的Tab长度",
    "STATUSBAR_SPACES": "空格长度:",
    "STATUSBAR_TAB_SIZE": "Tab 长度:",
    "STATUSBAR_LINE_COUNT_SINGULAR": "— {0} 行",
    "STATUSBAR_LINE_COUNT_PLURAL": "— {0} 行",
    "STATUSBAR_USER_EXTENSIONS_DISABLED": "扩展已禁用",
    "STATUSBAR_INSERT": "插入",
    "STATUSBAR_OVERWRITE": "改写",
    "STATUSBAR_INSOVR_TOOLTIP": "点击切换光标的插入 (INS) 和改写 (OVR) 模式",
    "STATUSBAR_LANG_TOOLTIP": "点击更改文件类型",
    "STATUSBAR_CODE_INSPECTION_TOOLTIP": "{0}。点击打开关闭报告面板",
    "STATUSBAR_DEFAULT_LANG": "(默认)",
    "STATUSBAR_SET_DEFAULT_LANG": "设置为 .{0} 的缺省",
    "ERRORS_PANEL_TITLE_MULTIPLE": "{0} 问题",
    "SINGLE_ERROR": "1个 {0} 问题",
    "MULTIPLE_ERRORS": "{1}个 {0} 问题",
    "NO_ERRORS": "未发现 {0} 问题 - 加油！",
    "NO_ERRORS_MULTIPLE_PROVIDER": "未发现问题 - 加油！",
    "LINT_DISABLED": "JSLint 已被禁用或者无法在此文件工作。",
    "NO_LINT_AVAILABLE": "{0} 没有可用检查器",
    "NOTHING_TO_LINT": "没有可检查文件",
    "LINTER_TIMED_OUT": "{0} 等待 {1} ms 后超时",
    "LINTER_FAILED": "{0} 已终止，错误：{1}",
    "FILE_MENU": "文件",
    "CMD_FILE_NEW_UNTITLED": "新建",
    "CMD_FILE_NEW": "新建文件",
    "CMD_FILE_NEW_FOLDER": "新建文件夹",
    "CMD_FILE_OPEN": "打开…",
    "CMD_ADD_TO_WORKING_SET": "添加至工作集合",
    "CMD_OPEN_DROPPED_FILES": "打开拖放的文件",
    "CMD_OPEN_FOLDER": "打开目录…",
    "CMD_FILE_CLOSE": "关闭",
    "CMD_FILE_CLOSE_ALL": "全部关闭",
    "CMD_FILE_CLOSE_LIST": "关闭列表中的文件",
    "CMD_FILE_CLOSE_OTHERS": "关闭其他文件",
    "CMD_FILE_CLOSE_ABOVE": "关闭上面的其他文件",
    "CMD_FILE_CLOSE_BELOW": "关闭下面的其他文件",
    "CMD_FILE_SAVE": "保存",
    "CMD_FILE_SAVE_ALL": "全部保存",
    "CMD_FILE_SAVE_AS": "另存为…",
    "CMD_LIVE_FILE_PREVIEW": "实时预览",
    "CMD_RELOAD_LIVE_PREVIEW": "强制实时预览重新加载",
    "CMD_PROJECT_SETTINGS": "项目设置…",
    "CMD_FILE_RENAME": "重命名",
    "CMD_FILE_DELETE": "删除",
    "CMD_INSTALL_EXTENSION": "安装扩展…",
    "CMD_EXTENSION_MANAGER": "扩展管理器…",
    "CMD_FILE_REFRESH": "刷新文件列表",
    "CMD_QUIT": "退出",
    "CMD_EXIT": "退出",
    "EDIT_MENU": "编辑",
    "CMD_UNDO": "撤销",
    "CMD_REDO": "重做",
    "CMD_CUT": "剪切",
    "CMD_COPY": "复制",
    "CMD_PASTE": "粘贴",
    "CMD_SELECT_ALL": "全选",
    "CMD_SELECT_LINE": "选中当前行",
    "CMD_SPLIT_SEL_INTO_LINES": "将选中内容拆分至多行",
    "CMD_ADD_CUR_TO_NEXT_LINE": "将下一行添加至选中内容",
    "CMD_ADD_CUR_TO_PREV_LINE": "将上一行添加至选中内容",
    "CMD_INDENT": "增加行缩进",
    "CMD_UNINDENT": "减少行缩进",
    "CMD_DUPLICATE": "创建副本",
    "CMD_DELETE_LINES": "删除当前行",
    "CMD_COMMENT": "注释当前行",
    "CMD_BLOCK_COMMENT": "注释选中内容",
    "CMD_LINE_UP": "移到下一行",
    "CMD_LINE_DOWN": "移到上一行",
    "CMD_OPEN_LINE_ABOVE": "在上方插入新行",
    "CMD_OPEN_LINE_BELOW": "在下方插入新行",
    "CMD_TOGGLE_CLOSE_BRACKETS": "括号自动补全",
    "CMD_SHOW_CODE_HINTS": "显示代码提示",
    "FIND_MENU": "查找",
    "CMD_FIND": "查找",
    "CMD_FIND_NEXT": "查找下一个",
    "CMD_FIND_PREVIOUS": "查找上一个",
    "CMD_FIND_ALL_AND_SELECT": "查找全部并选中",
    "CMD_ADD_NEXT_MATCH": "将下一项匹配添加至选中内容",
    "CMD_SKIP_CURRENT_MATCH": "跳过并添加下一项匹配",
    "CMD_FIND_IN_FILES": "在文件中查找",
    "CMD_FIND_IN_SELECTED": "在选中的文件/文件夹查找",
    "CMD_FIND_IN_SUBTREE": "在该位置查找…",
    "CMD_REPLACE": "替换",
    "CMD_REPLACE_IN_FILES": "在文件中替换",
    "CMD_REPLACE_IN_SELECTED": "在选中的文件/文件夹中替换",
    "CMD_REPLACE_IN_SUBTREE": "在该位置替换…",
    "VIEW_MENU": "视图",
    "CMD_HIDE_SIDEBAR": "隐藏边栏",
    "CMD_SHOW_SIDEBAR": "显示边栏",
    "CMD_INCREASE_FONT_SIZE": "放大编辑器字体",
    "CMD_DECREASE_FONT_SIZE": "缩小编辑器字体",
    "CMD_RESTORE_FONT_SIZE": "恢复编辑器默认字体",
    "CMD_SCROLL_LINE_UP": "向上滚动",
    "CMD_SCROLL_LINE_DOWN": "向下滚动",
    "CMD_TOGGLE_LINE_NUMBERS": "显示行号",
    "CMD_TOGGLE_ACTIVE_LINE": "高亮当前行",
    "CMD_TOGGLE_WORD_WRAP": "自动换行",
    "CMD_LIVE_HIGHLIGHT": "实时预览高亮",
    "CMD_VIEW_TOGGLE_INSPECTION": "保存时检查文件",
    "CMD_WORKINGSET_SORT_BY_ADDED": "根据添加时间排序",
    "CMD_WORKINGSET_SORT_BY_NAME": "根据名称排序",
    "CMD_WORKINGSET_SORT_BY_TYPE": "根据类型排序",
    "CMD_WORKING_SORT_TOGGLE_AUTO": "自动排序",
    "CMD_THEMES": "主题…",
    "NAVIGATE_MENU": "导航",
    "CMD_QUICK_OPEN": "打开快速导航",
    "CMD_GOTO_LINE": "转到某行",
    "CMD_GOTO_DEFINITION": "转到定义",
    "CMD_GOTO_FIRST_PROBLEM": "转到第一个错误/警告",
    "CMD_TOGGLE_QUICK_EDIT": "快速编辑",
    "CMD_TOGGLE_QUICK_DOCS": "快速文档",
    "CMD_QUICK_EDIT_PREV_MATCH": "上一个匹配项",
    "CMD_QUICK_EDIT_NEXT_MATCH": "下一个匹配项",
    "CMD_CSS_QUICK_EDIT_NEW_RULE": "新 CSS 规则",
    "CMD_NEXT_DOC": "下一个文件",
    "CMD_PREV_DOC": "上一个文件",
    "CMD_SHOW_IN_TREE": "在侧边栏显示",
    "CMD_SHOW_IN_EXPLORER": "在资源管理器中显示",
    "CMD_SHOW_IN_FINDER": "在 Finder 中显示",
    "CMD_SHOW_IN_OS": "打开文件所在目录",
    "HELP_MENU": "帮助",
    "CMD_CHECK_FOR_UPDATE": "检查更新",
    "CMD_HOW_TO_USE_BRACKETS": "如何使用 {APP_NAME}",
    "CMD_SUPPORT": "{APP_NAME} 支持",
    "CMD_SUGGEST": "推荐功能",
    "CMD_RELEASE_NOTES": "发行说明",
    "CMD_GET_INVOLVED": "参与",
    "CMD_SHOW_EXTENSIONS_FOLDER": "显示扩展目录",
    "CMD_HOMEPAGE": "{APP_TITLE} 主页",
    "CMD_TWITTER": "在 Twitter 上 {TWITTER_NAME}",
    "CMD_ABOUT": "关于 {APP_TITLE}",
    "CMD_OPEN_PREFERENCES": "打开配置文件",
    "CMD_OPEN_KEYMAP": "打开用户键映射",
    "EXPERIMENTAL_BUILD": "体验版",
    "RELEASE_BUILD": "发布版",
    "DEVELOPMENT_BUILD": "开发版",
    "RELOAD_FROM_DISK": "重新从硬盘中加载",
    "KEEP_CHANGES_IN_EDITOR": "保留编辑器中的修改",
    "CLOSE_DONT_SAVE": "放弃保存并关闭",
    "RELAUNCH_CHROME": "重新运行 Chrome",
    "ABOUT": "关于",
    "CLOSE": "关闭",
    "ABOUT_TEXT_LINE1": "sprint {VERSION_MINOR} {BUILD_TYPE} {VERSION}",
    "ABOUT_TEXT_BUILD_TIMESTAMP": "构建时间：",
    "ABOUT_TEXT_LINE3": "关于第三方软件的条款、条例和声明 &amp;lt;a href=&amp;#39;{ADOBE_THIRD_PARTY}&amp;#39;&amp;gt;{ADOBE_THIRD_PARTY}&amp;lt;/a&amp;gt; 以此作为参考。",
    "ABOUT_TEXT_LINE4": "文档与源码在 &amp;lt;a href=&amp;#39;https://github.com/adobe/brackets/&amp;#39;&amp;gt;https://github.com/adobe/brackets/&amp;lt;/a&amp;gt;",
    "ABOUT_TEXT_LINE5": "基于 ❤ 和 JavaScript 由以下用户参与贡献设计:",
    "ABOUT_TEXT_LINE6": "有相当多的人参与其中, 但现在有一些问题导致加载不出, 你可以到GitHub上去看。",
    "ABOUT_TEXT_WEB_PLATFORM_DOCS": "Web 平台文档和图形 logo 遵循&amp;lt;a href=&amp;#39;{WEB_PLATFORM_DOCS_LICENSE}&amp;#39;&amp;gt;署名-相同方式共享 3.0 未本地化&amp;lt;/a&amp;gt;协议。",
    "UPDATE_NOTIFICATION_TOOLTIP": "有一个新版本的 {APP_NAME}! 点此查看详情。",
    "UPDATE_AVAILABLE_TITLE": "可用的更新",
    "UPDATE_MESSAGE": "有一个新版本的 {APP_NAME}，增加了一些功能：",
    "GET_IT_NOW": "马上获取！",
    "PROJECT_SETTINGS_TITLE": "项目设置: {0}",
    "PROJECT_SETTING_BASE_URL": "实时预览的根目录地址",
    "PROJECT_SETTING_BASE_URL_HINT": "使用本地服务器, 并指定一个URL。 例如: http://localhost:8000/",
    "BASEURL_ERROR_INVALID_PROTOCOL": "实时预览不支持此协议 {0} &amp;amp;mdash;请使用 http: 或 https: .",
    "BASEURL_ERROR_SEARCH_DISALLOWED": "地址不能包含搜索参数如 &amp;quot;{0}&amp;quot;.",
    "BASEURL_ERROR_HASH_DISALLOWED": "地址不能包含哈希如 &amp;quot;{0}&amp;quot;.",
    "BASEURL_ERROR_INVALID_CHAR": "特殊字符 &amp;#39;{0}&amp;#39; 必须 %-encoded.",
    "BASEURL_ERROR_UNKNOWN_ERROR": "地址解析错误, 请确认地址格式",
    "EMPTY_VIEW_HEADER": "&amp;lt;em&amp;gt;保持此窗格的焦点，打开文件&amp;lt;/em&amp;gt;",
    "CURRENT_THEME": "当前主题",
    "USE_THEME_SCROLLBARS": "使用主题自带滚动条",
    "FONT_SIZE": "字号",
    "FONT_FAMILY": "字体",
    "THEMES_SETTINGS": "主题设置",
    "BUTTON_NEW_RULE": "新建规则",
    "INSTALL": "安装",
    "UPDATE": "升级",
    "REMOVE": "移除",
    "OVERWRITE": "覆盖",
    "CANT_REMOVE_DEV": "&amp;quot;dev&amp;quot; 文件夹中扩展必须手动删除。",
    "CANT_UPDATE": "升级与当前版本的 {APP_NAME} 不兼容。",
    "CANT_UPDATE_DEV": "&amp;quot;dev&amp;quot; 文件夹中的扩展无法自动升级。",
    "INSTALL_EXTENSION_TITLE": "安装扩展",
    "UPDATE_EXTENSION_TITLE": "升级扩展",
    "INSTALL_EXTENSION_LABEL": "扩展包地址",
    "INSTALL_EXTENSION_HINT": "填写扩展包的 zip 文件或 GitHub repo 的链接地址",
    "INSTALLING_FROM": "正在从 {0} 安装扩展…",
    "INSTALL_SUCCEEDED": "安装成功！",
    "INSTALL_FAILED": "安装失败.",
    "CANCELING_INSTALL": "正在取消…",
    "CANCELING_HUNG": "取消安装需要很长时间. 可能出现了内部错误。",
    "INSTALL_CANCELED": "安装已取消。",
    "VIEW_COMPLETE_DESCRIPTION": "查看完整说明",
    "VIEW_TRUNCATED_DESCRIPTION": "查看简短说明",
    "INVALID_ZIP_FILE": "下载的内容不是一个有效的 ZIP 文件。",
    "INVALID_PACKAGE_JSON": "扩展包中的 Package.json 不存在。(错误: {0})",
    "MISSING_PACKAGE_NAME": "扩展包中的 Package.json 未指定扩展包名称。",
    "BAD_PACKAGE_NAME": "{0} 是一个无效扩展包名。",
    "MISSING_PACKAGE_VERSION": "扩展包中的 Package.json 未指定扩展包版本。",
    "INVALID_VERSION_NUMBER": "扩展包版本号 ({0}) 无效。",
    "INVALID_BRACKETS_VERSION": "{APP_NAME} 兼容性字串 ({0}) 无效。",
    "DISALLOWED_WORDS": "({1}) 不允许在 {0} 中出现。",
    "API_NOT_COMPATIBLE": "这个扩展包不兼容当前版本的 {APP_NAME}. 将安装至 Disabled 扩展文件夹中。",
    "MISSING_MAIN": "扩展包遗失 main.js 文件.",
    "EXTENSION_ALREADY_INSTALLED": "安装这个扩展将会覆盖先前的版本, 覆盖旧版本吗？",
    "EXTENSION_SAME_VERSION": "已安装相同版本的扩展. 覆盖已存在的安装吗？",
    "EXTENSION_OLDER_VERSION": "扩展包版本 {0} 低于已安装版本 ({1})， 覆盖已存在的安装吗？",
    "DOWNLOAD_ID_IN_USE": "内部错误: 该下载ID已被使用。",
    "NO_SERVER_RESPONSE": "无法连接到服务器。",
    "BAD_HTTP_STATUS": "未在服务器上发现该文件 (HTTP {0})。",
    "CANNOT_WRITE_TEMP": "无法保存下载文件到临时文件。",
    "ERROR_LOADING": "扩展程序启动时遇到一个错误。",
    "MALFORMED_URL": "无效的链接地址，请检查输入是否有误。",
    "UNSUPPORTED_PROTOCOL": "需要一个 http 或 https 协议的地址。",
    "UNKNOWN_ERROR": "未知内部错误。",
    "EXTENSION_MANAGER_TITLE": "扩展管理器",
    "EXTENSION_MANAGER_ERROR_LOAD": "无法连接到扩展仓库。请稍后重试。",
    "INSTALL_EXTENSION_DRAG": "拖拽 .zip 到此处或者",
    "INSTALL_EXTENSION_DROP": "Drop .zip to install",
    "INSTALL_EXTENSION_DROP_ERROR": "安装/更新由于以下错误终止:",
    "INSTALL_FROM_URL": "从 URL 安装…",
    "INSTALL_EXTENSION_VALIDATING": "验证中...…",
    "EXTENSION_AUTHOR": "作者",
    "EXTENSION_DATE": "日期",
    "EXTENSION_INCOMPATIBLE_NEWER": "这个扩展需要更新版本的 {APP_NAME}。",
    "EXTENSION_INCOMPATIBLE_OLDER": "这个扩展目前只能在旧版本的 {APP_NAME} 上运行。",
    "EXTENSION_LATEST_INCOMPATIBLE_NEWER": "扩展版本为 {0} 需要一个更新版本的 {APP_NAME}，但你可以安装旧版本的扩展 {1}。",
    "EXTENSION_LATEST_INCOMPATIBLE_OLDER": "扩展版本为 {0} 需要一个更旧版本的 {APP_NAME}，但你可以安装旧版本的扩展 {1}。",
    "EXTENSION_NO_DESCRIPTION": "没有描述",
    "EXTENSION_MORE_INFO": "更多信息...",
    "EXTENSION_ERROR": "扩展错误",
    "EXTENSION_KEYWORDS": "关键词",
    "EXTENSION_TRANSLATED_USER_LANG": "翻译为{0} , 包括你所使用的语言",
    "EXTENSION_TRANSLATED_GENERAL": "翻译为 {0} ",
    "EXTENSION_TRANSLATED_LANGS": "该扩展已被翻译为以下语言: {0}",
    "EXTENSION_INSTALLED": "已安装",
    "EXTENSION_UPDATE_INSTALLED": "此扩展的更新已下载, 将在重启 {APP_NAME} 后安装。",
    "EXTENSION_SEARCH_PLACEHOLDER": "搜索",
    "EXTENSION_MORE_INFO_LINK": "更多",
    "BROWSE_EXTENSIONS": "浏览扩展",
    "EXTENSION_MANAGER_REMOVE": "移除扩展",
    "EXTENSION_MANAGER_REMOVE_ERROR": "无法移除一个或多个扩展: {0}. {APP_NAME} 仍会重新加载。",
    "EXTENSION_MANAGER_UPDATE": "升级扩展",
    "EXTENSION_MANAGER_UPDATE_ERROR": "无法升级一个或多个扩展: {0}. {APP_NAME} 仍会重新加载。",
    "MARKED_FOR_REMOVAL": "标记为删除",
    "UNDO_REMOVE": "撤销",
    "MARKED_FOR_UPDATE": "标记为升级",
    "UNDO_UPDATE": "撤销",
    "CHANGE_AND_RELOAD_TITLE": "扩展更改",
    "CHANGE_AND_RELOAD_MESSAGE": "安装或移除已标记的扩展, 需要退出并重启 {APP_NAME}， 请保存未保存的更改。",
    "REMOVE_AND_RELOAD": "移除扩展并退出",
    "CHANGE_AND_RELOAD": "更改扩展并退出",
    "UPDATE_AND_RELOAD": "升级扩展并退出",
    "PROCESSING_EXTENSIONS": "正在处理扩展的变更…",
    "EXTENSION_NOT_INSTALLED": "无法移除扩展 {0} 其并未被安装.",
    "NO_EXTENSIONS": "还没有安装扩展。&amp;lt;br&amp;gt;点击上方可用的标签开始安装。",
    "NO_EXTENSION_MATCHES": "没有找到相符的扩展。",
    "REGISTRY_SANITY_CHECK_WARNING": "小心来自未知源的扩展。",
    "EXTENSIONS_INSTALLED_TITLE": "已安装",
    "EXTENSIONS_AVAILABLE_TITLE": "可获取",
    "EXTENSIONS_THEMES_TITLE": "主题",
    "EXTENSIONS_UPDATES_TITLE": "升级",
    "INLINE_EDITOR_NO_MATCHES": "未找到匹配项。",
    "INLINE_EDITOR_HIDDEN_MATCHES": "所有匹配项已折叠。展开右侧列出的文件以查看匹配项。",
    "CSS_QUICK_EDIT_NO_MATCHES": "符合选择的 CSS 规则不存在。&amp;lt;br&amp;gt; 点击 &amp;quot;新 CSS 规则&amp;quot; 来创建。",
    "CSS_QUICK_EDIT_NO_STYLESHEETS": "您的项目中没有样式表。&amp;lt;br&amp;gt;建立一个来添加 CSS 规则。",
    "IMAGE_VIEWER_LARGEST_ICON": "最大化",
    "UNIT_PIXELS": "像素",
    "DEBUG_MENU": "调试",
    "ERRORS": "错误",
    "CMD_SHOW_DEV_TOOLS": "显示开发者工具",
    "CMD_REFRESH_WINDOW": "以带扩展模式重启",
    "CMD_RELOAD_WITHOUT_USER_EXTS": "以无扩展模式重启",
    "CMD_NEW_BRACKETS_WINDOW": "新建一个 {APP_NAME} 窗口",
    "CMD_SWITCH_LANGUAGE": "切换语言",
    "CMD_RUN_UNIT_TESTS": "运行测试",
    "CMD_SHOW_PERF_DATA": "显示性能数据",
    "CMD_ENABLE_NODE_DEBUGGER": "启用 Node.js 调试",
    "CMD_LOG_NODE_STATE": "将 Node.js 日志显示在控制台中",
    "CMD_RESTART_NODE": "重启 Node.js",
    "CMD_SHOW_ERRORS_IN_STATUS_BAR": "状态栏显示错误信息",
    "CMD_OPEN_BRACKETS_SOURCE": "打开 Brackets 源码",
    "LANGUAGE_TITLE": "切换语言",
    "LANGUAGE_MESSAGE": "请从列表中选择所需的语言:",
    "LANGUAGE_SUBMIT": "重新加载 {APP_NAME}",
    "LANGUAGE_CANCEL": "取消",
    "LANGUAGE_SYSTEM_DEFAULT": "系统默认",
    "INLINE_TIMING_EDITOR_TIME": "时间",
    "INLINE_TIMING_EDITOR_PROGRESSION": "进程",
    "BEZIER_EDITOR_INFO": "&amp;lt;kbd&amp;gt;↑&amp;lt;/kbd&amp;gt;&amp;lt;kbd&amp;gt;↓&amp;lt;/kbd&amp;gt;&amp;lt;kbd&amp;gt;←&amp;lt;/kbd&amp;gt;&amp;lt;kbd&amp;gt;→&amp;lt;/kbd&amp;gt; 移动选中点&amp;lt;br&amp;gt;&amp;lt;kbd class=&amp;#39;text&amp;#39;&amp;gt;Shift&amp;lt;/kbd&amp;gt; 10倍移动&amp;lt;br&amp;gt;&amp;lt;kbd class=&amp;#39;text&amp;#39;&amp;gt;Tab&amp;lt;/kbd&amp;gt; 切换点",
    "STEPS_EDITOR_INFO": "&amp;lt;kbd&amp;gt;↑&amp;lt;/kbd&amp;gt;&amp;lt;kbd&amp;gt;↓&amp;lt;/kbd&amp;gt; 增减步进&amp;lt;br&amp;gt;&amp;lt;kbd&amp;gt;←&amp;lt;/kbd&amp;gt;&amp;lt;kbd&amp;gt;→&amp;lt;/kbd&amp;gt; 切换 &amp;#39;Start&amp;#39; 或 &amp;#39;End&amp;#39;",
    "INLINE_TIMING_EDITOR_INVALID": "原值 &amp;lt;code&amp;gt;{0}&amp;lt;/code&amp;gt; 无效, 函数值已变为 &amp;lt;code&amp;gt;{1}&amp;lt;/code&amp;gt;. 文档将在首次编辑时更新.",
    "COLOR_EDITOR_CURRENT_COLOR_SWATCH_TIP": "当前颜色",
    "COLOR_EDITOR_ORIGINAL_COLOR_SWATCH_TIP": "原始颜色",
    "COLOR_EDITOR_RGBA_BUTTON_TIP": "RGBa 格式",
    "COLOR_EDITOR_HEX_BUTTON_TIP": "Hex 格式",
    "COLOR_EDITOR_HSLA_BUTTON_TIP": "HSLa 格式",
    "COLOR_EDITOR_USED_COLOR_TIP_SINGULAR": "{0} (已用 {1} 次)",
    "COLOR_EDITOR_USED_COLOR_TIP_PLURAL": "{0} (已用 {1} 次)",
    "CMD_JUMPTO_DEFINITION": "跳到定义",
    "CMD_SHOW_PARAMETER_HINT": "显示参数提示",
    "NO_ARGUMENTS": "&lt;无参数&gt;",
    "DETECTED_EXCLUSION_TITLE": "JavaScript 文件推导问题",
    "DETECTED_EXCLUSION_INFO": "Brackets 处理文件遇到问题： &amp;lt;br&amp;gt;&amp;lt;br&amp;gt;{0}&amp;lt;br&amp;gt;&amp;lt;br&amp;gt; 该文件不再用于处理代码提示，并会跳转到源码定义处。 为避免这个问题, 请打开项目中的 &amp;lt;code&amp;gt;.brackets.json&amp;lt;/code&amp;gt; ,从 jscodehints.detectedExclusions 删除该文件",
    "JSLINT_NAME": "JSLint",
    "CMD_ENABLE_QUICK_VIEW": "悬停时快速查看",
    "CMD_TOGGLE_RECENT_PROJECTS": "最近的项目",
    "DOCS_MORE_LINK": "阅读更多",
    "ERROR_RENAMING_DIRECTORY_TITLE": "重命名目录出错",
    "ERROR_RENAMING_DIRECTORY": "尝试重命名目录 &lt;span class=&#39;dialog-filename&#39;&gt;{0}&lt;/span&gt; 时出错。{1}",
    "ERROR_DELETING_DIRECTORY_TITLE": "删除目录出错",
    "ERROR_DELETING_DIRECTORY": "尝试删除目录 &lt;span class=&#39;dialog-filename&#39;&gt;{0}&lt;/span&gt; 时出错。{1}",
    "INVALID_DIRNAME_TITLE": "无效目录名称",
    "INVALID_DIRNAME_MESSAGE": "目录名称不能使用任何系统保留字，不能以点 (.) 结束，也不能使用下列字符：&lt;code class=&#39;emphasized&#39;&gt;{1}&lt;/code&gt;",
    "ERROR_CREATING_DIRECTORY_TITLE": "创建目录出错",
    "ERROR_CREATING_DIRECTORY": "尝试创建目录 &lt;span class=&#39;dialog-filename&#39;&gt;{1}&lt;/span&gt; 时出错。{2}",
    "DND_MAX_FILE_SIZE_EXCEEDED": "文件超过支持的最大大小: 3MB",
    "DND_UNSUPPORTED_FILE_TYPE": "不支持的文件类型",
    "DND_ERROR_UNZIP": "无法 unzip 文件",
    "DND_ERROR_UNTAR": "无法 untar 文件",
    "DND_SUCCESS_UNZIP_TITLE": "unzip 成功完成",
    "DND_SUCCESS_UNTAR_TITLE": "untar 成功完成",
    "DND_SUCCESS_UNZIP": "已成功 unzip &lt;b&gt;{0}&lt;/b&gt;。",
    "DND_SUCCESS_UNTAR": "已成功 untar &lt;b&gt;{0}&lt;/b&gt;。",
    "UPLOAD_FILES_DIALOG_HEADER": "上传文件",
    "DRAG_AREA_UPLOAD_FILES_DIALOG_TEXT": "...或拖放文件到此处。",
    "DROP_AREA_UPLOAD_FILES_DIALOG_TEXT": "确定，发布文件！",
    "UPLOADING_INDICATOR": "正在上传...",
    "BUTTON_FROM_YOUR_COMPUTER": "从您的计算机...",
    "TAKE_A_SELFIE": "拍张自拍...",
    "CMD_MOVE_FILE": "移动到...",
    "PROJECT_ROOT": "项目根目录",
    "PICK_A_FOLDER_TO_MOVE_TO": "选择一个文件夹",
    "ERROR_MOVING_FILE_DIALOG_HEADER": "移动出错",
    "UNEXPECTED_ERROR_MOVING_FILE": "尝试移动 {0} 至 {1} 时发生意外错误",
    "ERROR_MOVING_FILE_SAME_NAME": "一个文件或文件夹的名称 {0} 在 {1} 中已经存在。请考虑重命名其中之一以继续。"
});

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  resources: {
    en: {
      translation: {
        appName: "CodeAsk",
        titleSecondPage: "Second Page",
        menu: {
          file: {
            title: "File",
            openFile: "Open File",
            openFolder: "Open Folder",
            openRecent: "Open Recent",
            noRecentFolders: "No Recent Folders",
            exit: "Exit"
          },
          settings: {
            title: "Settings",
          },
          help: {
            title: "Help",
            documentation: "Documentation",
            about: "About",
            checkForUpdates: 'Check for Updates',
            checkingUpdates: 'Checking for Updates...',
            newVersionAvailable: 'Update'
          }
        },
        codeview: {
          sidebar: {
            explorer: "Explorer",
            search: "Search",
            plugin: "Plugin",
            model: "Model",
            locate: "Locate",
            promptTemplates: "Prompt Templates",
            globalAnalysis: "Global Analysis"
          },
          tabs: {
            splitScreen: "Split Screen",
            cancelSplit: "Cancel Split"
          },
          noOpenedFile: "No opened file",
          model: {
            title: "Model List",
            add: "Add Model",
            edit: "Edit Model",
            name: "Model Name",
            apiKey: "API Key",
            baseUrl: "Base URL",
            temperature: "Temperature",
            maxContextTokens: "Max Context Tokens",
            maxOutputTokens: "Max Output Tokens",
            concurrency: "Concurrency",
            save: "Save"
          },
          plugin: {
            title: "Plugin List",
            add: "Add Plugin",
            edit: "Edit Plugin",
            name: "Plugin Name",
            model: "Model",
            selectModel: "Select Model",
            unknownModel: "Unknown Model",
            systemPrompt: "System Prompt",
            userPrompt: "User Prompt",
            save: "Save",
            convertToMine: "Convert to My Plugin",
            projectPlugin: "Project Plugin",
            myPlugin: "My Plugin",
            execute: {
              title: "Execute Plugin:",
              filterRules: "Filter Rules",
              fileExtensions: "File Extensions (comma separated)",
              fileExtensionsPlaceholder: "e.g. .ts,.tsx,.js",
              displayMode: "Display Mode",
              displayModeAll: "Show All",
              displayModeUnprocessed: "Hide Processed",
              displayModeUnprocessedAndUpdated: "Show Unprocessed and Updated",
              fileSelection: "File Selection",
              selectAll: "Select All",
              selectedFiles: "selected files",
              processing: "Processing...",
              execute: "Execute",
              modelNotFound: "Model not found. Please edit the plugin to select a model first",
              pluginNotFound: "Plugin not found",
              unknownError: "Unknown error",
              completed: "Completed",
              selectExtensions: "Select File Extensions",
              noExtension: "No Extension",
              confirm: "Confirm"
            }
          },
          promptTemplates: {
            title: "Prompt Templates",
            chinese: "Chinese",
            english: "English",
            japanese: "Japanese",
            systemPrompt: "System Prompt",
            userPrompt: "User Prompt",
            use: "Use Template",
            preview: "Preview",
            sharePrompt: "Have a better prompt idea? Share it now!",
            addSuccess: "Added to plugin list successfully! Go check it out!"
          },
          search: {
            placeholder: "Search in files and plugin results...",
            searchIn: "Search in",
            code: "Code Files",
            plugin: "Plugin Results",
            extensions: "File Types",
            selectAll: "Select All",
            noResults: "No results found",
            searching: "Searching...",
            results: "{{count}} results found"
          },
          globalAnalysis: {
            title: "Global Analysis",
            add: "Add Analysis",
            edit: "Edit Analysis",
            name: "Analysis Name",
            selectModel: "Select Model",
            unknownModel: "Unknown Model",
            models: "Single: {{single}}, Summary: {{summary}}",
            projectAnalysis: "Project Analysis",
            myAnalysis: "My Analysis",
            convertToMine: "Convert to My Analysis",
            save: "Save",
            singlePage: {
              title: "Single Page Analysis",
              model: "Model",
              prompt: "Prompt"
            },
            summary: {
              title: "Summary Analysis",
              model: "Model",
              prompt: "Prompt"
            },
            execute: {
              title: "Execute Analysis: {{name}}",
              filterRules: "Filter Rules",
              fileExtensions: "File Extensions (comma separated)",
              fileExtensionsPlaceholder: "e.g. .ts,.tsx,.js",
              fileSelection: "File Selection",
              selectAll: "Select All",
              selectedFiles: "selected files",
              processing: "Processing...",
              execute: "Execute",
              modelNotFound: "Model not found. Please edit the analysis to select a model first",
              analysisNotFound: "Analysis not found",
              unknownError: "Unknown error",
              analyzingFiles: "Analyzing Files",
              generatingSummary: "Generating Summary",
              analysisComplete: "Analysis Complete",
              selectExtensions: "Select File Extensions",
              noExtension: "No Extension",
              confirm: "Confirm"
            }
          }
        },
        dialog: {
          updateCheck: {
            title: 'Update Check',
            currentVersion: 'Current Version',
            latestVersion: 'Latest Version',
            upToDate: 'You are up to date!',
            download: 'Download Update',
            changelog: 'Changelog',
          },
        },
      },
    },
    zh: {
      translation: {
        appName: "CodeAsk",
        titleSecondPage: "第二页",
        menu: {
          file: {
            title: "文件",
            openFile: "打开文件",
            openFolder: "打开文件夹",
            openRecent: "打开最近",
            noRecentFolders: "没有最近的文件夹",
            exit: "退出"
          },
          settings: {
            title: "设置",
          },
          help: {
            title: "帮助",
            documentation: "文档",
            about: "关于",
            checkForUpdates: '检查更新',
            checkingUpdates: '正在检查更新...',
            newVersionAvailable: '更新'
          }
        },
        codeview: {
          sidebar: {
            explorer: "资源管理器",
            search: "搜索",
            plugin: "插件",
            model: "模型",
            locate: "定位文件",
            promptTemplates: "提示词模板",
            globalAnalysis: "全局分析"
          },
          tabs: {
            splitScreen: "分屏显示",
            cancelSplit: "取消分屏"
          },
          noOpenedFile: "没有打开的文件",
          model: {
            title: "模型列表",
            add: "添加模型",
            edit: "编辑模型",
            name: "模型名称",
            apiKey: "API Key",
            baseUrl: "Base URL",
            temperature: "温度",
            maxContextTokens: "最大上下文Token数",
            maxOutputTokens: "最大输出Token数",
            concurrency: "并发数",
            save: "保存"
          },
          plugin: {
            title: "插件列表",
            add: "添加插件",
            edit: "编辑插件",
            name: "插件名称",
            model: "使用模型",
            selectModel: "选择模型",
            unknownModel: "未知模型",
            systemPrompt: "系统提示词",
            userPrompt: "用户提示词",
            save: "保存",
            convertToMine: "转换为我的插件",
            projectPlugin: "项目插件",
            myPlugin: "我的插件",
            execute: {
              title: "执行插件：",
              filterRules: "过滤规则",
              fileExtensions: "文件扩展名（用逗号分隔）",
              fileExtensionsPlaceholder: "例如：.ts,.tsx,.js",
              displayMode: "文件显示模式",
              displayModeAll: "全部显示",
              displayModeUnprocessed: "隐藏已处理",
              displayModeUnprocessedAndUpdated: "显示未处理及需更新",
              fileSelection: "文件选择",
              selectAll: "全选",
              selectedFiles: "个已选择文件",
              processing: "处理中...",
              execute: "执行",
              modelNotFound: "未找到模型，请先编辑插件选择模型",
              pluginNotFound: "插件未找到",
              unknownError: "未知错误",
              completed: "已完成",
              selectExtensions: "选择文件扩展名",
              noExtension: "无扩展名",
              confirm: "确认"
            }
          },
          promptTemplates: {
            title: "提示词模板",
            chinese: "中文",
            english: "英文",
            japanese: "日文",
            systemPrompt: "系统提示词",
            userPrompt: "用户提示词",
            use: "使用模板",
            preview: "预览",
            sharePrompt: "有更好的提示词创意？快来分享吧！",
            addSuccess: "已添加到插件列表中！快去看看吧！"
          },
          search: {
            placeholder: "搜索文件和插件结果...",
            searchIn: "搜索范围",
            code: "代码文件",
            plugin: "插件结果",
            extensions: "文件类型",
            selectAll: "全选",
            noResults: "未找到结果",
            searching: "搜索中...",
            results: "找到 {{count}} 个结果"
          },
          globalAnalysis: {
            title: "全局分析",
            add: "添加分析",
            edit: "编辑分析",
            name: "分析名称",
            selectModel: "选择模型",
            unknownModel: "未知模型",
            models: "单页：{{single}}，总结：{{summary}}",
            projectAnalysis: "项目分析",
            myAnalysis: "我的分析",
            convertToMine: "转换为我的分析",
            save: "保存",
            singlePage: {
              title: "单页分析",
              model: "使用模型",
              prompt: "提示词"
            },
            summary: {
              title: "总结分析",
              model: "使用模型",
              prompt: "提示词"
            },
            execute: {
              title: "执行分析：{{name}}",
              filterRules: "过滤规则",
              fileExtensions: "文件扩展名（用逗号分隔）",
              fileExtensionsPlaceholder: "例如：.ts,.tsx,.js",
              fileSelection: "文件选择",
              selectAll: "全选",
              selectedFiles: "个已选择文件",
              processing: "处理中...",
              execute: "执行",
              modelNotFound: "未找到模型，请先编辑分析选择模型",
              analysisNotFound: "分析未找到",
              unknownError: "未知错误",
              analyzingFiles: "分析文件中",
              generatingSummary: "生成总结中",
              analysisComplete: "分析完成",
              selectExtensions: "选择文件扩展名",
              noExtension: "无扩展名",
              confirm: "确认"
            }
          }
        },
        dialog: {
          updateCheck: {
            title: '检查更新',
            currentVersion: '当前版本',
            latestVersion: '最新版本',
            upToDate: '已是最新版本！',
            download: '下载更新',
            changelog: '更新日志',
          },
        },
      },
    },
    ja: {
      translation: {
        appName: "CodeAsk",
        titleSecondPage: "セカンドページ",
        menu: {
          file: {
            title: "ファイル",
            openFile: "ファイルを開く",
            openFolder: "フォルダを開く",
            openRecent: "最近使用したファイル",
            noRecentFolders: "最近使用したフォルダはありません",
            exit: "終了"
          },
          settings: {
            title: "設定",
          },
          help: {
            title: "ヘルプ",
            documentation: "ドキュメント",
            about: "バージョン情報",
            checkForUpdates: 'アップデートを確認',
            checkingUpdates: 'アップデートを確認中...',
            newVersionAvailable: '更新'
          }
        },
        codeview: {
          sidebar: {
            explorer: "エクスプローラー",
            search: "検索",
            plugin: "プラグイン",
            model: "モデル",
            locate: "ファイルを探す",
            promptTemplates: "プロンプトテンプレート",
            globalAnalysis: "グローバル分析"
          },
          tabs: {
            splitScreen: "分割画面表示",
            cancelSplit: "分割解除"
          },
          noOpenedFile: "開いているファイルがありません",
          model: {
            title: "モデル一覧",
            add: "モデルを追加",
            edit: "モデルを編集",
            name: "モデル名",
            apiKey: "API Key",
            baseUrl: "Base URL",
            temperature: "温度",
            maxContextTokens: "最大コンテキストトークン数",
            maxOutputTokens: "最大出力トークン数",
            concurrency: "同時実行数",
            save: "保存"
          },
          plugin: {
            title: "プラグイン一覧",
            add: "プラグインを追加",
            edit: "プラグインを編集",
            name: "プラグイン名",
            model: "使用モデル",
            selectModel: "モデルを選択",
            unknownModel: "不明なモデル",
            systemPrompt: "システムプロンプト",
            userPrompt: "ユーザープロンプト",
            save: "保存",
            convertToMine: "マイプラグインに変換",
            projectPlugin: "プロジェクトプラグイン",
            myPlugin: "マイプラグイン",
            execute: {
              title: "プラグインを実行：",
              filterRules: "フィルタールール",
              fileExtensions: "ファイル拡張子（カンマ区切り）",
              fileExtensionsPlaceholder: "例：.ts,.tsx,.js",
              displayMode: "表示モード",
              displayModeAll: "すべて表示",
              displayModeUnprocessed: "処理済みを非表示",
              displayModeUnprocessedAndUpdated: "未処理と更新が必要なファイルを表示",
              fileSelection: "ファイル選択",
              selectAll: "すべて選択",
              selectedFiles: "個のファイルを選択",
              processing: "処理中...",
              execute: "実行",
              modelNotFound: "モデルが見つかりません。先にプラグインを編集してモデルを選択してください",
              pluginNotFound: "プラグインが見つかりません",
              unknownError: "不明なエラー",
              completed: "完了",
              selectExtensions: "ファイル拡張子を選択",
              noExtension: "拡張子なし",
              confirm: "確認"
            }
          },
          promptTemplates: {
            title: "プロンプトテンプレート",
            chinese: "中国語",
            english: "英語",
            japanese: "日本語",
            systemPrompt: "システムプロンプト",
            userPrompt: "ユーザープロンプト",
            use: "テンプレートを使用",
            preview: "プレビュー",
            sharePrompt: "より良いプロンプトのアイデアがありますか？共有してください！",
            addSuccess: "プラグインリストに追加されました！確認してみましょう！"
          },
          search: {
            placeholder: "ファイルとプラグイン結果を検索...",
            searchIn: "検索対象",
            code: "コードファイル",
            plugin: "プラグイン結果",
            extensions: "ファイルタイプ",
            selectAll: "すべて選択",
            noResults: "結果が見つかりません",
            searching: "検索中...",
            results: "{{count}}件の結果が見つかりました"
          },
          globalAnalysis: {
            title: "グローバル分析",
            add: "分析を追加",
            edit: "分析を編集",
            name: "分析名",
            selectModel: "モデルを選択",
            unknownModel: "不明なモデル",
            models: "単一：{{single}}、要約：{{summary}}",
            projectAnalysis: "プロジェクト分析",
            myAnalysis: "マイ分析",
            convertToMine: "マイ分析に変換",
            save: "保存",
            singlePage: {
              title: "単一ページ分析",
              model: "使用モデル",
              prompt: "プロンプト"
            },
            summary: {
              title: "要約分析",
              model: "使用モデル",
              prompt: "プロンプト"
            },
            execute: {
              title: "分析を実行：{{name}}",
              filterRules: "フィルタールール",
              fileExtensions: "ファイル拡張子（カンマ区切り）",
              fileExtensionsPlaceholder: "例：.ts,.tsx,.js",
              fileSelection: "ファイル選択",
              selectAll: "すべて選択",
              selectedFiles: "個のファイルを選択",
              processing: "処理中...",
              execute: "実行",
              modelNotFound: "モデルが見つかりません。先に分析を編集してモデルを選択してください",
              analysisNotFound: "分析が見つかりません",
              unknownError: "不明なエラー",
              analyzingFiles: "ファイル分析中",
              generatingSummary: "要約生成中",
              analysisComplete: "分析完了",
              selectExtensions: "ファイル拡張子を選択",
              noExtension: "拡張子なし",
              confirm: "確認"
            }
          }
        },
        dialog: {
          updateCheck: {
            title: 'アップデートの確認',
            currentVersion: '現在のバージョン',
            latestVersion: '最新バージョン',
            upToDate: '最新版です！',
            download: 'アップデートをダウンロード',
            changelog: '更新履歴',
          },
        },
      },
    },
  },
});

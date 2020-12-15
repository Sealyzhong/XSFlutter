/*
 * @Author: Sealy
 * @GitHub:
 * @Email: 122391458@qq.com
 * @Date: 2019/08/10
 * @Description: 缓存管理.
 */
import 'package:sqflite/sqflite.dart' as sqlite;
import 'package:path/path.dart';
import '../models/response_model.dart';

class SqliterUtil {
  static SqliterUtil _instance;

  static SqliterUtil getInstance() {
    if (_instance == null) {
      _instance = SqliterUtil();
      _instance._dbMap = Map<String, sqlite.Database>();
    }
    return _instance;
  }

  Map<String, sqlite.Database> _dbMap;

  ///
  /// Get the default databases location.
  /// On Android, it is typically data/data/<package_name>/databases
  /// On iOS, it is the Documents directory
  Future<ResponseModel> databasePath(String dbName) async {
    return ResponseModel(flag: true, data: await _getDBPath(dbName));
  }

  ///
  /// Check if a database exists at a given path.
  Future<ResponseModel> databaseExists(String dbName) async {
    var path = await _getDBPath(dbName);
    var result = await sqlite.databaseExists(path);
    return ResponseModel(flag: result);
  }

  ///
  /// Delete the database at the given path.
  Future<ResponseModel> deleteDatabase(String dbName) async {
    //从列表移除数据
    _dbMap.remove(dbName);
    //删除DB数据库文件
    var path = await _getDBPath(dbName);
    await sqlite.deleteDatabase(path);
    return ResponseModel(flag: true, info: "success");
  }

  /*
   * 数据库路经
   */
  Future<String> _getDBPath(String dbName) async {
    var _name = dbName;
    if (!_name.contains(".")) {
      _name = _name + ".db";
    }
    var databasesPath = await sqlite.getDatabasesPath();
    return join(databasesPath, _name);
  }

  /*
  * 初始化数据
  * */
  Future<ResponseModel> openDatabase(String dbName, {int version = 0, String configureSql, String createSql, String openSql, bool readOnly = false, bool singleInstance = true}) async {
    String path = await _getDBPath(dbName);
    sqlite.Database _database = _dbMap[dbName];
    if (_database == null) {
      try {
        _database ??= await sqlite.openDatabase(
          path,
          version: version,
          readOnly: readOnly,
          singleInstance: singleInstance,
          onConfigure: (dataBase) {
            if (configureSql != null && configureSql.isNotEmpty) {
              dataBase.execute(configureSql);
            }
          },
          onCreate: (dataBase, version) {
            if (createSql != null && createSql.isNotEmpty) {
              dataBase.execute(createSql);
            }
          },
          onOpen: (dataBase) {
            if (openSql != null && openSql.isNotEmpty) {
              dataBase.execute(openSql);
            }
          },
        );

        if (_database != null) {
          _dbMap[dbName] = _database;
        }
      } catch (ex) {
        return ResponseModel(flag: false, info: ex.toString());
      }
    }
    return ResponseModel(flag: true, info: "success");
  }

  /*
   * SQL语句执行 
   */
  Future<ResponseModel> execute(String dbName, String sql) async {
    sqlite.Database _database = _dbMap[dbName];
    if (_database == null) {
      return ResponseModel(flag: false, info: "数据<" + dbName + ">不存在，请选择执行openDB");
    }
    await _database.execute(sql);
    return ResponseModel(flag: true, info: "success");
  }

  /*
   * SQL语句执行 
   */
  Future<ResponseModel> rawQuery(String dbName, String sql) async {
    sqlite.Database _database = _dbMap[dbName];
    if (_database == null) {
      return ResponseModel(flag: false, info: "数据<" + dbName + ">不存在，请选择执行openDB");
    }
    try {
      var result = await _database.rawQuery(sql);
      return ResponseModel(flag: true, info: "success", data: result);
    } catch (ex) {
      return ResponseModel(flag: false, info: ex.toString());
    }
  }

  /*
   * SQL语句执行 
   */
  Future<ResponseModel> rawDelete(String dbName, String sql) async {
    sqlite.Database _database = _dbMap[dbName];
    if (_database == null) {
      return ResponseModel(flag: false, info: "数据<" + dbName + ">不存在，请选择执行openDB");
    }
    try {
      var result = await _database.rawDelete(sql);
      return ResponseModel(flag: true, info: "success", data: result);
    } catch (ex) {
      return ResponseModel(flag: false, info: ex.toString());
    }
  }

  /*
   * 插入数据
   */
  Future<ResponseModel> rawInsert(String dbName, String sql) async {
    sqlite.Database _database = _dbMap[dbName];
    if (_database == null) {
      return ResponseModel(flag: false, info: "数据<" + dbName + ">不存在，请选择执行openDB");
    }
    try {
      var result = await _database.rawInsert(sql);
      return ResponseModel(flag: true, info: "success", data: result);
    } catch (ex) {
      return ResponseModel(flag: false, info: ex.toString());
    }
  }

  /*
   * 更新数据
   */
  Future<ResponseModel> rawUpdate(String dbName, String sql) async {
    sqlite.Database _database = _dbMap[dbName];
    if (_database == null) {
      return ResponseModel(flag: false, info: "数据<" + dbName + ">不存在，请选择执行openDB");
    }
    try {
      var result = await _database.rawUpdate(sql);
      return ResponseModel(flag: true, info: "success", data: result);
    } catch (ex) {
      return ResponseModel(flag: false, info: ex.toString());
    }
  }

  /*
   * 关闭数据库
   */
  Future<ResponseModel> close(String dbName) async {
    sqlite.Database _database = _dbMap[dbName];
    if (_database == null) {
      return ResponseModel(flag: false, info: "数据<" + dbName + ">不存在，请选择执行openDB");
    }
    try {
      await _database.close();
      return ResponseModel(flag: true, info: "success");
    } catch (ex) {
      return ResponseModel(flag: false, info: ex.toString());
    }
  }
}

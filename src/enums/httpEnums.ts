/**
 * @description 请求配置
 */

export const enum ResultEnum {
    SUCCESS=200,
    ERROR=500,
    TIMEOUT=6000,
    TYPE="success"

}

/**
 * @descripton 请求方法
 */

export const enum RequestEnum {
    GET="GET",
    POST = "POST",
	PATCH = "PATCH",
	PUT = "PUT",
	DELETE = "DELETE"
}

/**
 * @description：常用的contentTyp类型
 */

 export const enum ContentTypeEnum {
	// json
	JSON = "application/json;charset=UTF-8",
	// text
	TEXT = "text/plain;charset=UTF-8",
	// form-data 一般配合qs
	FORM_URLENCODED = "application/x-www-form-urlencoded;charset=UTF-8",
	// form-data 上传
	FORM_DATA = "multipart/form-data;charset=UTF-8"
}
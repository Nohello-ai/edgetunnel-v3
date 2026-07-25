/**
 * 日志工具
 */
import { get调试日志打印 } from '../state.js';

export function log(...args) {
	if (get调试日志打印()) console.log(...args);
}

import { createDecoratorExp, type Decorator } from '@cocojs/mvc';
import Log from './metadata/log';

export default createDecoratorExp(Log) as () => Decorator<ClassMethodDecoratorContext>;

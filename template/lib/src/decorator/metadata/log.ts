import { Metadata, target, Target, id } from '@cocojs/mvc';

@id('Log')
@target([Target.Type.Method])
class Log extends Metadata {}

export default Log;

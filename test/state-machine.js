var requirejs = require('requirejs'),
    assert = require('assert'),
    StateMachine = requirejs(__dirname + '/../src/visualizers/widgets/EasyDAG/state-machine.js');

describe('State machine', function() {

    it('should create initial node', function() {
        var machine,
            states = [
            ],
            initial;

        machine = new StateMachine(states);
        initial = machine.initial();
        assert(initial);
    });
    
    it('should create initial node w/ transition', function() {
        var machine,
            states = [
                ['a']
            ],
            initial;

        machine = new StateMachine(states);
        initial = machine.initial();
        assert(initial.trans('a'));
    });
    
    it('should not allow self conns by default', function() {
        var machine,
            states = [
                ['a']
            ],
            initial;

        machine = new StateMachine(states);
        initial = machine.initial();
        var a = initial.trans('a');
        assert(!a.trans('a'));
    });
    
    it('should add simple p3', function() {
        var machine,
            states = [
                ['a', 'b', 'c']
            ],
            initial;

        machine = new StateMachine(states);
        initial = machine.initial();

        var a = initial.trans('a'),
            b = a.trans('b'),
            c = b.trans('c');

        assert(initial);
        assert(a);
        assert(b);
        assert(c);
    });

    it('should set terminal node', function() {
        var machine,
            states = [
                ['a', 'b']
            ],
            initial;

        machine = new StateMachine(states);
        initial = machine.initial();

        var a = initial.trans('a'),
            b = a.trans('b');

        assert(b.isTerminal);
    });

    it('should add %number hierachical node', function() {
        var machine,
            states = [
                ['%number']
            ],
            initial;

        machine = new StateMachine(states);
        initial = machine.initial();

        var a = initial.trans('0'),
            b = a.trans('1'),
            c = b.trans('2');

        assert(initial);
        assert(a);
        assert(b);
        assert(c);
    });

    describe('%number', function() {
        it('should create large number', function() {
            var machine,
                states = [
                    ['%number']
                ],

                initial;

            machine = new StateMachine(states);
            initial = machine.initial();

            var num = '1234567890011253',
                n = initial;

            for (var i = num.length; i--;) {
                n = n.trans(num[i]);
            }

            assert(n);
        });

        it('should connect to subsequent nodes', function() {
            var machine,
                states = [
                    ['%number', 'd']
                ],

                initial;

            machine = new StateMachine(states);
            initial = machine.initial();

            var num = 'd1',
                n1 = initial.trans('1'),
                n2 = n1.trans('d');

            assert.equal(n1.id, '1');
            assert(n2);
            assert.equal(n2.id, 'd');
        });

        it('should not add subsequent nodes to clique', function() {
            var machine,
                states = [
                    ['%number', 'd']
                ],

                initial;

            machine = new StateMachine(states);
            initial = machine.initial();

            var d = machine.states.d.trans('d');
            assert.equal(machine.states.d.trans('d'), null);
            var num = 'dd1',
                n = initial;

            for (var i = num.length; i--;) {
                n = n.trans(num[i]);
            }

            assert.equal(n, null);
        });

        it('should not overwrite hstates', function() {
            var machine,
                states = [
                    ['%number', 'j'],
                    ['%number', 'k']
                ],

                initial;

            machine = new StateMachine(states);
            initial = machine.initial();
            var num = 'j2',
                n = initial;

            for (var i = num.length; i--;) {
                n = n.trans(num[i]);
            }

            assert.notEqual(n, null);
        });

    });

    // If we have duplicate subsequent states, create a new state for the new one
    it('should support [j, j] terminal detection', function() {
        var machine,
            states = [
                ['j', 'j']
            ],

            initial;

        machine = new StateMachine(states);
        initial = machine.initial();
        var num = 'jj',
            n1 = initial.trans('j'),
            n2 = n1.trans('j');

        assert(n1 !== n2, 'nodes are the same');
        assert.equal(n2.isTerminal, true);
    });

});

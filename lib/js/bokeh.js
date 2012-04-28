// Generated by CoffeeScript 1.3.1
(function() {
  var Bokeh, BokehView, Collections, Component, D3LinearAxes, D3LinearAxis, D3LinearAxisView, DiscreteColorMapper, DiscreteColorMappers, FactorRange, FactorRanges, GridPlotContainer, GridPlotContainerView, GridPlotContainers, HasParent, HasProperties, HasReference, LinearMapper, LinearMappers, Mapper, ObjectArrayDataSource, ObjectArrayDataSources, Plot, PlotView, Plots, Range1d, Range1ds, Renderer, ScatterRenderer, ScatterRendererView, ScatterRenderers, build_views, safebind,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; },
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  if (this.Bokeh) {
    Bokeh = this.Bokeh;
  } else {
    Bokeh = {};
    this.Bokeh = Bokeh;
  }

  Collections = {};

  Bokeh.register_collection = function(key, value) {
    Collections[key] = value;
    return value.bokeh_key = key;
  };

  "MAIN BOKEH CLASSES";


  safebind = Continuum.safebind;

  BokehView = (function(_super) {

    __extends(BokehView, _super);

    BokehView.name = 'BokehView';

    function BokehView() {
      return BokehView.__super__.constructor.apply(this, arguments);
    }

    BokehView.prototype.add_dialog = function() {
      var _this = this;
      return this.$el.dialog({
        close: function() {
          return _this.remove();
        }
      });
    };

    return BokehView;

  })(Continuum.ContinuumView);

  HasProperties = Continuum.HasProperties;

  HasReference = (function(_super) {

    __extends(HasReference, _super);

    HasReference.name = 'HasReference';

    function HasReference() {
      return HasReference.__super__.constructor.apply(this, arguments);
    }

    HasReference.prototype.collections = Collections;

    return HasReference;

  })(Continuum.HasReference);

  Renderer = (function(_super) {

    __extends(Renderer, _super);

    Renderer.name = 'Renderer';

    function Renderer() {
      return Renderer.__super__.constructor.apply(this, arguments);
    }

    Renderer.prototype.initialize = function(options) {
      this.plot_id = options.plot_id;
      this.plot_model = options.plot_model;
      return Renderer.__super__.initialize.call(this, options);
    };

    return Renderer;

  })(BokehView);

  HasParent = (function(_super) {

    __extends(HasParent, _super);

    HasParent.name = 'HasParent';

    function HasParent() {
      return HasParent.__super__.constructor.apply(this, arguments);
    }

    HasParent.prototype.get_fallback = function(attr) {
      if (this.get_ref('parent') && _.indexOf(this.get_ref('parent').parent_properties, attr) >= 0 && !_.isUndefined(this.get_ref('parent').get(attr))) {
        return this.get_ref('parent').get(attr);
      } else {
        return this.display_defaults[attr];
      }
    };

    HasParent.prototype.get = function(attr) {
      if (!_.isUndefined(HasParent.__super__.get.call(this, attr))) {
        return HasParent.__super__.get.call(this, attr);
      } else if (!(attr === 'parent')) {
        return this.get_fallback(attr);
      }
    };

    HasParent.prototype.display_defaults = {};

    return HasParent;

  })(HasReference);

  Component = (function(_super) {

    __extends(Component, _super);

    Component.name = 'Component';

    function Component() {
      return Component.__super__.constructor.apply(this, arguments);
    }

    Component.prototype.xpos = function(x) {
      return x;
    };

    Component.prototype.ypos = function(y) {
      return this.get('height') - y;
    };

    Component.prototype.position_child_x = function(child, offset) {
      return this.xpos(offset);
    };

    Component.prototype.position_child_y = function(child, offset) {
      return this.ypos(offset) - child.get('height');
    };

    Component.prototype.position_x = function() {
      var parent;
      parent = this.get_ref('parent');
      if (!parent) {
        return 0;
      }
      return this.position_child_x(this, this.get('offset')[0]);
    };

    Component.prototype.position_y = function() {
      var parent, val;
      parent = this.get_ref('parent');
      if (!parent) {
        return 0;
      }
      val = this.position_child_y(this, this.get('offset')[1]);
      return val;
    };

    Component.prototype.initialize = function(attrs, options) {
      Component.__super__.initialize.call(this, attrs, options);
      this.register_property('outerwidth', ['width', 'border_space'], function(width, border_space) {
        return width + 2 * border_space;
      }, false);
      return this.register_property('outerheight', ['height', 'border_space'], function(height, border_space) {
        return height + 2 * border_space;
      }, false);
    };

    Component.prototype.defaults = {
      parent: null
    };

    Component.prototype.display_defaults = {
      width: 200,
      height: 200,
      position: 0,
      offset: [0, 0]
    };

    Component.prototype.default_view = null;

    return Component;

  })(HasParent);

  "Utility Classes for vis";


  Range1d = (function(_super) {

    __extends(Range1d, _super);

    Range1d.name = 'Range1d';

    function Range1d() {
      return Range1d.__super__.constructor.apply(this, arguments);
    }

    Range1d.prototype.type = 'Range1d';

    Range1d.prototype.defaults = {
      start: 0,
      end: 1
    };

    return Range1d;

  })(HasReference);

  Range1ds = (function(_super) {

    __extends(Range1ds, _super);

    Range1ds.name = 'Range1ds';

    function Range1ds() {
      return Range1ds.__super__.constructor.apply(this, arguments);
    }

    Range1ds.prototype.model = Range1d;

    return Range1ds;

  })(Backbone.Collection);

  FactorRange = (function(_super) {

    __extends(FactorRange, _super);

    FactorRange.name = 'FactorRange';

    function FactorRange() {
      return FactorRange.__super__.constructor.apply(this, arguments);
    }

    FactorRange.prototype.type = 'FactorRange';

    FactorRange.prototype.defaults = {
      values: []
    };

    return FactorRange;

  })(HasReference);

  FactorRanges = (function(_super) {

    __extends(FactorRanges, _super);

    FactorRanges.name = 'FactorRanges';

    function FactorRanges() {
      return FactorRanges.__super__.constructor.apply(this, arguments);
    }

    FactorRanges.prototype.model = FactorRange;

    return FactorRanges;

  })(Backbone.Collection);

  Mapper = (function(_super) {

    __extends(Mapper, _super);

    Mapper.name = 'Mapper';

    function Mapper() {
      return Mapper.__super__.constructor.apply(this, arguments);
    }

    Mapper.prototype.defaults = {};

    Mapper.prototype.display_defaults = {};

    Mapper.prototype.map_screen = function(data) {};

    return Mapper;

  })(HasReference);

  "LinearMapper";


  LinearMapper = (function(_super) {

    __extends(LinearMapper, _super);

    LinearMapper.name = 'LinearMapper';

    function LinearMapper() {
      return LinearMapper.__super__.constructor.apply(this, arguments);
    }

    LinearMapper.prototype.type = 'LinearMapper';

    LinearMapper.prototype.defaults = {
      data_range: null,
      screen_range: null
    };

    LinearMapper.prototype.calc_scale = function() {
      var domain, range;
      domain = [this.get_ref('data_range').get('start'), this.get_ref('data_range').get('end')];
      range = [this.get_ref('screen_range').get('start'), this.get_ref('screen_range').get('end')];
      return this.scale = d3.scale.linear().domain(domain).range(range);
    };

    LinearMapper.prototype.initialize = function(attrs, options) {
      LinearMapper.__super__.initialize.call(this, attrs, options);
      this.calc_scale();
      safebind(this, this.get_ref('data_range'), 'change', this.calc_scale);
      return safebind(this, this.get_ref('screen_range'), 'change', this.calc_scale);
    };

    LinearMapper.prototype.map_screen = function(data) {
      return this.scale(data);
    };

    return LinearMapper;

  })(Mapper);

  LinearMappers = (function(_super) {

    __extends(LinearMappers, _super);

    LinearMappers.name = 'LinearMappers';

    function LinearMappers() {
      return LinearMappers.__super__.constructor.apply(this, arguments);
    }

    LinearMappers.prototype.model = LinearMapper;

    return LinearMappers;

  })(Backbone.Collection);

  "Discrete Color Mapper";


  DiscreteColorMapper = (function(_super) {

    __extends(DiscreteColorMapper, _super);

    DiscreteColorMapper.name = 'DiscreteColorMapper';

    function DiscreteColorMapper() {
      return DiscreteColorMapper.__super__.constructor.apply(this, arguments);
    }

    DiscreteColorMapper.prototype.type = 'DiscreteColorMapper';

    DiscreteColorMapper.prototype.defaults = {
      colors: ["#1f77b4", "#aec7e8", "#ff7f0e", "#ffbb78", "#2ca02c", "#98df8a", "#d62728", "#ff9896", "#9467bd", "#c5b0d5", "#8c564b", "#c49c94", "#e377c2", "#f7b6d2", "#7f7f7f", "#c7c7c7", "#bcbd22", "#dbdb8d", "#17becf", "#9edae5"],
      data_range: null
    };

    DiscreteColorMapper.prototype.initialize = function(attrs, options) {
      DiscreteColorMapper.__super__.initialize.call(this, attrs, options);
      this.get('data_range');
      this.register_property('factor_map', ['data_range'], function(data_range) {
        var domain_map, index, val, _i, _len, _ref;
        domain_map = {};
        _ref = data_range.get('values');
        for (index = _i = 0, _len = _ref.length; _i < _len; index = ++_i) {
          val = _ref[index];
          domain_map[val] = index;
        }
        return domain_map;
      }, true);
      return this.scale = d3.scale.ordinal().range(this.get('colors'));
    };

    DiscreteColorMapper.prototype.map_screen = function(data) {
      return this.scale(this.get('factor_map')[data]);
    };

    return DiscreteColorMapper;

  })(HasReference);

  DiscreteColorMappers = (function(_super) {

    __extends(DiscreteColorMappers, _super);

    DiscreteColorMappers.name = 'DiscreteColorMappers';

    function DiscreteColorMappers() {
      return DiscreteColorMappers.__super__.constructor.apply(this, arguments);
    }

    DiscreteColorMappers.prototype.model = DiscreteColorMapper;

    return DiscreteColorMappers;

  })(Backbone.Collection);

  "Data Sources";


  ObjectArrayDataSource = (function(_super) {

    __extends(ObjectArrayDataSource, _super);

    ObjectArrayDataSource.name = 'ObjectArrayDataSource';

    function ObjectArrayDataSource() {
      return ObjectArrayDataSource.__super__.constructor.apply(this, arguments);
    }

    ObjectArrayDataSource.prototype.type = 'ObjectArrayDataSource';

    ObjectArrayDataSource.prototype.defaults = {
      data: [{}],
      name: 'data'
    };

    ObjectArrayDataSource.prototype.initialize = function(attrs, options) {
      ObjectArrayDataSource.__super__.initialize.call(this, attrs, options);
      this.cont_ranges = {};
      return this.discrete_ranges = {};
    };

    ObjectArrayDataSource.prototype.compute_cont_range = function(field) {
      var max, min, x;
      max = _.max((function() {
        var _i, _len, _ref, _results;
        _ref = this.get('data');
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          x = _ref[_i];
          _results.push(x[field]);
        }
        return _results;
      }).call(this));
      min = _.min((function() {
        var _i, _len, _ref, _results;
        _ref = this.get('data');
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          x = _ref[_i];
          _results.push(x[field]);
        }
        return _results;
      }).call(this));
      return [min, max];
    };

    ObjectArrayDataSource.prototype.compute_discrete_factor = function(field) {
      var temp, uniques, val, x, _i, _len, _ref;
      temp = {};
      _ref = (function() {
        var _j, _len, _ref, _results;
        _ref = this.get('data');
        _results = [];
        for (_j = 0, _len = _ref.length; _j < _len; _j++) {
          x = _ref[_j];
          _results.push(x[field]);
        }
        return _results;
      }).call(this);
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        val = _ref[_i];
        temp[val] = true;
      }
      uniques = _.keys(temp);
      return uniques = _.sortBy(uniques, (function(x) {
        return x;
      }));
    };

    ObjectArrayDataSource.prototype.get_cont_range = function(field) {
      var max, min, _ref,
        _this = this;
      if (!_.has(this.cont_ranges, field)) {
        _ref = this.compute_cont_range(field), min = _ref[0], max = _ref[1];
        this.cont_ranges[field] = Collections['Range1d'].create({
          'start': min,
          'end': max
        });
        this.on('change:data', function() {
          var _ref1;
          _ref1 = _this.compute_cont_range(field), max = _ref1[0], min = _ref1[1];
          _this.cont_ranges[field].set('start', min);
          return _this.cont_ranges[field].set('end', max);
        });
      }
      return this.cont_ranges[field];
    };

    ObjectArrayDataSource.prototype.get_discrete_range = function(field) {
      var factors,
        _this = this;
      if (!_.has(this.discrete_ranges, field)) {
        factors = this.compute_discrete_factor(field);
        this.discrete_ranges[field] = Collections['FactorRange'].create({
          values: factors
        });
        this.on('change:data', function() {
          factors = _this.compute_discrete_factor(field);
          return _this.discrete_ranges[field] = Collections['FactorRange'].set('values', factors);
        });
      }
      return this.discrete_ranges[field];
    };

    return ObjectArrayDataSource;

  })(HasReference);

  ObjectArrayDataSources = (function(_super) {

    __extends(ObjectArrayDataSources, _super);

    ObjectArrayDataSources.name = 'ObjectArrayDataSources';

    function ObjectArrayDataSources() {
      return ObjectArrayDataSources.__super__.constructor.apply(this, arguments);
    }

    ObjectArrayDataSources.prototype.model = ObjectArrayDataSource;

    return ObjectArrayDataSources;

  })(Backbone.Collection);

  "Individual Components below.\nwe first define the default view for a component,\nthe model for the component, and the collection";


  "Plot Container";


  GridPlotContainerView = (function(_super) {

    __extends(GridPlotContainerView, _super);

    GridPlotContainerView.name = 'GridPlotContainerView';

    function GridPlotContainerView() {
      return GridPlotContainerView.__super__.constructor.apply(this, arguments);
    }

    GridPlotContainerView.prototype.initialize = function(options) {
      GridPlotContainerView.__super__.initialize.call(this, options);
      this.childviews = {};
      this.build_children();
      this.model.on('change:children', this.build_children, this);
      return this.model.on('change', this.render, this);
    };

    GridPlotContainerView.prototype.build_children = function() {
      var childspecs, node, row, x, _i, _j, _len, _len1, _ref;
      node = this.build_node();
      childspecs = [];
      _ref = this.mget('children');
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        row = _ref[_i];
        for (_j = 0, _len1 = row.length; _j < _len1; _j++) {
          x = row[_j];
          childspecs.push(x);
        }
      }
      return build_views(this.model, this.childviews, childspecs, {
        'el': this.tag_d3('plot')[0][0]
      });
    };

    GridPlotContainerView.prototype.build_node = function() {
      var node;
      node = this.tag_d3('mainsvg');
      if (node === null) {
        node = d3.select(this.el).append('svg').attr('id', this.tag_id('mainsvg'));
        node.append('g').attr('id', this.tag_id('plot'));
      }
      return node;
    };

    GridPlotContainerView.prototype.render = function() {
      var cidx, col_widths, node, plot, plotspec, ridx, row, row_heights, x_coords, y_coords, _i, _len, _ref, _results;
      node = this.build_node();
      this.tag_d3('plot').attr('transform', _.template('translate({{s}}, {{s}})', {
        's': this.mget('border_space')
      }));
      node.attr('width', this.mget('outerwidth')).attr('height', this.mget('outerheight')).attr('x', this.model.position_x()).attr('y', this.model.position_y());
      row_heights = this.model.layout_heights();
      col_widths = this.model.layout_widths();
      y_coords = [0];
      _.reduceRight(row_heights.slice(1), function(x, y) {
        var val;
        val = x + y;
        y_coords.push(val);
        return val;
      }, 0);
      y_coords.reverse();
      x_coords = [0];
      _.reduce(col_widths.slice(1), function(x, y) {
        var val;
        val = x + y;
        x_coords.push(val);
        return val;
      }, 0);
      _ref = this.mget('children');
      _results = [];
      for (ridx = _i = 0, _len = _ref.length; _i < _len; ridx = ++_i) {
        row = _ref[ridx];
        _results.push((function() {
          var _j, _len1, _results1;
          _results1 = [];
          for (cidx = _j = 0, _len1 = row.length; _j < _len1; cidx = ++_j) {
            plotspec = row[cidx];
            plot = this.model.resolve_ref(plotspec);
            this.childviews[plot.id].render();
            _results1.push(plot.set({
              'offset': [x_coords[cidx], y_coords[ridx]]
            }));
          }
          return _results1;
        }).call(this));
      }
      return _results;
    };

    return GridPlotContainerView;

  })(BokehView);

  GridPlotContainer = (function(_super) {

    __extends(GridPlotContainer, _super);

    GridPlotContainer.name = 'GridPlotContainer';

    function GridPlotContainer() {
      this.maxdim = __bind(this.maxdim, this);
      return GridPlotContainer.__super__.constructor.apply(this, arguments);
    }

    GridPlotContainer.prototype.type = 'GridPlotContainer';

    GridPlotContainer.prototype.default_view = GridPlotContainerView;

    GridPlotContainer.prototype.trigger_layout = function() {
      return this.trigger('change:layout', this, [this.layout_heights(), this.layout_widths()]);
    };

    GridPlotContainer.prototype.initialize = function(attrs, options) {
      var _this = this;
      GridPlotContainer.__super__.initialize.call(this, attrs, options);
      safebind(this, this, 'change:children', function() {
        _this.unbind_child_dependencies(_this.previous('children'));
        _this.bind_child_dependencies(_this.get('children'));
        return _this.trigger_layout();
      });
      safebind(this, this, 'change:layout', this.set_dims);
      return this.set_dims();
    };

    GridPlotContainer.prototype.set_dims = function() {
      var layout_heights, layout_widths;
      layout_heights = this.layout_heights();
      layout_widths = this.layout_widths();
      return this.set({
        'height': _.reduce(layout_heights, (function(x, y) {
          return x + y;
        }), 0),
        'width': _.reduce(layout_widths, (function(x, y) {
          return x + y;
        }), 0)
      });
    };

    GridPlotContainer.prototype.bind_child_dependencies = function(children) {
      var cidx, plot, plotspec, ridx, row, _i, _len, _results;
      _results = [];
      for (ridx = _i = 0, _len = children.length; _i < _len; ridx = ++_i) {
        row = children[ridx];
        _results.push((function() {
          var _j, _len1, _results1;
          _results1 = [];
          for (cidx = _j = 0, _len1 = row.length; _j < _len1; cidx = ++_j) {
            plotspec = row[cidx];
            plot = this.resolve_ref(plotspec);
            safebind(this, plot, 'change:outerwidth', this.trigger_layout);
            _results1.push(safebind(this, plot, 'change:outerheight', this.trigger_layout));
          }
          return _results1;
        }).call(this));
      }
      return _results;
    };

    GridPlotContainer.prototype.unbind_child_dependencies = function(children) {
      var cidx, plot, plotspec, ridx, row, _i, _len, _results;
      _results = [];
      for (ridx = _i = 0, _len = children.length; _i < _len; ridx = ++_i) {
        row = children[ridx];
        _results.push((function() {
          var _j, _len1, _results1;
          _results1 = [];
          for (cidx = _j = 0, _len1 = row.length; _j < _len1; cidx = ++_j) {
            plotspec = row[cidx];
            plot = this.resolve_ref(plotspec);
            plot.off('change:outerwidth', null, this);
            _results1.push(plot.off('change:outerheight', null, this));
          }
          return _results1;
        }).call(this));
      }
      return _results;
    };

    GridPlotContainer.prototype.maxdim = function(dim, row) {
      var x;
      if (row.length === 0) {
        return 0;
      } else {
        return _.max((function() {
          var _i, _len, _results;
          _results = [];
          for (_i = 0, _len = row.length; _i < _len; _i++) {
            x = row[_i];
            _results.push(this.resolve_ref(x).get(dim));
          }
          return _results;
        }).call(this));
      }
    };

    GridPlotContainer.prototype.layout_heights = function() {
      var row, row_heights;
      row_heights = (function() {
        var _i, _len, _ref, _results;
        _ref = this.get('children');
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          row = _ref[_i];
          _results.push(this.maxdim('outerheight', row));
        }
        return _results;
      }).call(this);
      return row_heights;
    };

    GridPlotContainer.prototype.layout_widths = function() {
      var col, col_widths, columns, maxdim, n, num_cols, row,
        _this = this;
      maxdim = function(dim, row) {
        var x;
        return _.max((function() {
          var _i, _len, _results;
          _results = [];
          for (_i = 0, _len = row.length; _i < _len; _i++) {
            x = row[_i];
            _results.push(this.resolve_ref(x).get(dim));
          }
          return _results;
        }).call(_this));
      };
      num_cols = this.get('children')[0].length;
      columns = (function() {
        var _i, _len, _ref, _results;
        _ref = _.range(num_cols);
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          n = _ref[_i];
          _results.push((function() {
            var _j, _len1, _ref1, _results1;
            _ref1 = this.get('children');
            _results1 = [];
            for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
              row = _ref1[_j];
              _results1.push(row[n]);
            }
            return _results1;
          }).call(this));
        }
        return _results;
      }).call(this);
      col_widths = (function() {
        var _i, _len, _results;
        _results = [];
        for (_i = 0, _len = columns.length; _i < _len; _i++) {
          col = columns[_i];
          _results.push(this.maxdim('outerwidth', col));
        }
        return _results;
      }).call(this);
      return col_widths;
    };

    return GridPlotContainer;

  })(Component);

  _.extend(GridPlotContainer.prototype.defaults, {
    'resize_children': false,
    'children': [[]]
  });

  GridPlotContainers = (function(_super) {

    __extends(GridPlotContainers, _super);

    GridPlotContainers.name = 'GridPlotContainers';

    function GridPlotContainers() {
      return GridPlotContainers.__super__.constructor.apply(this, arguments);
    }

    GridPlotContainers.prototype.model = GridPlotContainer;

    return GridPlotContainers;

  })(Backbone.Collection);

  PlotView = (function(_super) {

    __extends(PlotView, _super);

    PlotView.name = 'PlotView';

    function PlotView() {
      return PlotView.__super__.constructor.apply(this, arguments);
    }

    PlotView.prototype.initialize = function(options) {
      PlotView.__super__.initialize.call(this, options);
      this.renderers = {};
      this.axes = {};
      this.build_renderers();
      this.build_axes();
      this.render();
      safebind(this, this.model, 'change:renderers', this.build_renderers);
      safebind(this, this.model, 'change:axes', this.build_axes);
      return safebind(this, this.model, 'change', this.render);
    };

    PlotView.prototype.build_renderers = function() {
      return build_views(this.model, this.renderers, this.mget('renderers'), {
        'el': this.el,
        'plot_id': this.id,
        'plot_model': this.model
      });
    };

    PlotView.prototype.build_axes = function() {
      return build_views(this.model, this.axes, this.mget('axes'), {
        'el': this.el,
        'plot_id': this.id,
        'plot_model': this.model
      });
    };

    PlotView.prototype.render_mainsvg = function() {
      var node;
      node = this.tag_d3('mainsvg');
      if (node === null) {
        node = d3.select(this.el).append('svg').attr('id', this.tag_id('mainsvg'));
        node.append('g').attr('id', this.tag_id('plot'));
      }
      node.attr('x', this.model.position_x()).attr('y', this.model.position_y());
      node.attr('width', this.mget('outerwidth')).attr("height", this.mget('outerheight'));
      return this.tag_d3('plot').attr('transform', _.template('translate({{s}}, {{s}})', {
        's': this.mget('border_space')
      }));
    };

    PlotView.prototype.render_frame = function() {
      var innernode;
      innernode = this.tag_d3('innerbox');
      if (innernode === null) {
        innernode = this.tag_d3('plot').append('rect').attr('id', this.tag_id('innerbox'));
      }
      return innernode.attr('fill', this.mget('background_color')).attr('stroke', this.model.get('foreground_color')).attr('width', this.mget('width')).attr("height", this.mget('height'));
    };

    PlotView.prototype.render = function() {
      var key, view, _ref, _ref1, _results;
      this.render_mainsvg();
      this.render_frame();
      _ref = this.axes;
      for (key in _ref) {
        if (!__hasProp.call(_ref, key)) continue;
        view = _ref[key];
        view.render();
      }
      _ref1 = this.renderers;
      _results = [];
      for (key in _ref1) {
        if (!__hasProp.call(_ref1, key)) continue;
        view = _ref1[key];
        _results.push(view.render());
      }
      return _results;
    };

    return PlotView;

  })(BokehView);

  build_views = function(mainmodel, view_storage, view_specs, options) {
    var found, key, model, spec, value, _i, _j, _len, _len1, _results;
    found = {};
    for (_i = 0, _len = view_specs.length; _i < _len; _i++) {
      spec = view_specs[_i];
      model = mainmodel.resolve_ref(spec);
      found[model.id] = true;
      if (view_storage[model.id]) {
        continue;
      }
      options = _.extend({}, spec.options, options, {
        'model': model
      });
      view_storage[model.id] = new model.default_view(options);
    }
    _results = [];
    for (value = _j = 0, _len1 = view_storage.length; _j < _len1; value = ++_j) {
      key = view_storage[value];
      if (!_.has(found, key)) {
        value.remove();
        _results.push(delete view_storage[key]);
      } else {
        _results.push(void 0);
      }
    }
    return _results;
  };

  Plot = (function(_super) {

    __extends(Plot, _super);

    Plot.name = 'Plot';

    function Plot() {
      return Plot.__super__.constructor.apply(this, arguments);
    }

    Plot.prototype.type = 'Plot';

    Plot.prototype.default_view = PlotView;

    Plot.prototype.parent_properties = ['background_color', 'foreground_color', 'width', 'height', 'border_space'];

    Plot.prototype.initialize = function(attrs, options) {
      var _this = this;
      Plot.__super__.initialize.call(this, attrs, options);
      this.register_property('outerwidth', ['width', 'border_space'], function(width, border_space) {
        return width + 2 * border_space;
      }, false);
      this.register_property('outerheight', ['height', 'border_space'], function(height, border_space) {
        return height + 2 * border_space;
      }, false);
      this.xrange = Collections['Range1d'].create({
        'start': 0,
        'end': this.get('height')
      });
      this.yrange = Collections['Range1d'].create({
        'start': 0,
        'end': this.get('width')
      });
      this.on('change:width', function() {
        return _this.xrange.set('end', _this.get('width'));
      });
      return this.on('change:height', function() {
        return _this.yrange.set('end', _this.get('height'));
      });
    };

    return Plot;

  })(Component);

  _.extend(Plot.prototype.defaults, {
    'data_sources': {},
    'renderers': [],
    'axes': [],
    'legends': [],
    'tools': [],
    'overlays': []
  });

  _.extend(Plot.prototype.display_defaults, {
    'background_color': "#ddd",
    'foreground_color': "#333",
    'border_space': 50
  });

  Plots = (function(_super) {

    __extends(Plots, _super);

    Plots.name = 'Plots';

    function Plots() {
      return Plots.__super__.constructor.apply(this, arguments);
    }

    Plots.prototype.model = Plot;

    return Plots;

  })(Backbone.Collection);

  "D3LinearAxisView";


  D3LinearAxisView = (function(_super) {

    __extends(D3LinearAxisView, _super);

    D3LinearAxisView.name = 'D3LinearAxisView';

    function D3LinearAxisView() {
      return D3LinearAxisView.__super__.constructor.apply(this, arguments);
    }

    D3LinearAxisView.prototype.get_offsets = function(orientation) {
      var offsets;
      offsets = {
        'x': 0,
        'y': 0
      };
      if (orientation === 'bottom') {
        offsets['y'] += this.plot_model.get('height');
      }
      return offsets;
    };

    D3LinearAxisView.prototype.get_tick_size = function(orientation) {
      if (!_.isNull(this.mget('tickSize'))) {
        return this.mget('tickSize');
      } else {
        if (orientation === 'bottom') {
          return -this.plot_model.get('height');
        } else {
          return -this.plot_model.get('width');
        }
      }
    };

    D3LinearAxisView.prototype.convert_scale = function(scale) {
      var domain, func, range, _ref;
      domain = scale.domain();
      range = scale.range();
      if ((_ref = this.mget('orientation')) === 'bottom' || _ref === 'top') {
        func = 'xpos';
      } else {
        func = 'ypos';
      }
      range = [this.plot_model[func](range[0]), this.plot_model[func](range[1])];
      scale = d3.scale.linear().domain(domain).range(range);
      return scale;
    };

    D3LinearAxisView.prototype.render = function() {
      var axis, base, node, offsets, scale_converted, temp, ticksize;
      base = this.tag_d3('plot', this.plot_id);
      node = this.tag_d3('axis');
      if (!node) {
        node = base.append('g', this.tag_selector('plot', this.plot_id)).attr('id', this.tag_id('axis')).attr('class', 'D3LinearAxisView').attr('stroke', this.mget('foreground_color'));
      }
      offsets = this.get_offsets(this.mget('orientation'));
      offsets['h'] = this.plot_model.get('height');
      node.attr('transform', _.template('translate({{x}}, {{y}})', offsets));
      axis = d3.svg.axis();
      ticksize = this.get_tick_size(this.mget('orientation'));
      scale_converted = this.convert_scale(this.mget_ref('mapper').scale);
      temp = axis.scale(scale_converted);
      temp.orient(this.mget('orientation')).ticks(this.mget('ticks')).tickSubdivide(this.mget('tickSubdivide')).tickSize(ticksize).tickPadding(this.mget('tickPadding'));
      node.call(axis);
      return node.selectAll('.tick').attr('stroke', this.mget('tick_color'));
    };

    return D3LinearAxisView;

  })(Renderer);

  D3LinearAxis = (function(_super) {

    __extends(D3LinearAxis, _super);

    D3LinearAxis.name = 'D3LinearAxis';

    function D3LinearAxis() {
      return D3LinearAxis.__super__.constructor.apply(this, arguments);
    }

    D3LinearAxis.prototype.type = 'D3LinearAxis';

    D3LinearAxis.prototype.default_view = D3LinearAxisView;

    D3LinearAxis.prototype.defaults = {
      mapper: null,
      orientation: 'bottom',
      ticks: 10,
      ticksSubdivide: 1,
      tickSize: null,
      tickPadding: 3
    };

    D3LinearAxis.prototype.display_defaults = {
      tick_color: '#fff'
    };

    return D3LinearAxis;

  })(Component);

  D3LinearAxes = (function(_super) {

    __extends(D3LinearAxes, _super);

    D3LinearAxes.name = 'D3LinearAxes';

    function D3LinearAxes() {
      return D3LinearAxes.__super__.constructor.apply(this, arguments);
    }

    D3LinearAxes.prototype.model = D3LinearAxis;

    return D3LinearAxes;

  })(Backbone.Collection);

  ScatterRendererView = (function(_super) {

    __extends(ScatterRendererView, _super);

    ScatterRendererView.name = 'ScatterRendererView';

    function ScatterRendererView() {
      return ScatterRendererView.__super__.constructor.apply(this, arguments);
    }

    ScatterRendererView.prototype.render_marks = function(marks) {
      var xfield, xmapper, yfield, ymapper,
        _this = this;
      xmapper = this.model.get_ref('xmapper');
      ymapper = this.model.get_ref('ymapper');
      xfield = this.model.get('xfield');
      yfield = this.model.get('yfield');
      return marks.attr('cx', function(d) {
        var pos;
        pos = xmapper.map_screen(d[xfield]);
        return _this.model.xpos(pos);
      }).attr('cy', function(d) {
        var pos;
        pos = ymapper.map_screen(d[yfield]);
        return _this.model.ypos(pos);
      }).attr('r', this.model.get('radius')).attr('fill', function(d) {
        if (_this.model.get('color_field')) {
          return _this.model.get_ref('color_mapper').map_screen(d[_this.model.get('color_field')]);
        } else {
          return _this.model.get('foreground_color');
        }
      });
    };

    ScatterRendererView.prototype.render = function() {
      var circles, node, plot;
      plot = this.tag_d3('plot', this.plot_id);
      node = this.tag_d3('scatter');
      if (!node) {
        node = plot.append('g').attr('id', this.tag_id('scatter'));
      }
      circles = node.selectAll(this.model.get('mark')).data(this.model.get_ref('data_source').get('data'));
      this.render_marks(circles);
      this.render_marks(circles.enter().append(this.model.get('mark')));
      return circles.exit().remove();
    };

    return ScatterRendererView;

  })(Renderer);

  ScatterRenderer = (function(_super) {

    __extends(ScatterRenderer, _super);

    ScatterRenderer.name = 'ScatterRenderer';

    function ScatterRenderer() {
      return ScatterRenderer.__super__.constructor.apply(this, arguments);
    }

    ScatterRenderer.prototype.type = 'ScatterRenderer';

    ScatterRenderer.prototype.default_view = ScatterRendererView;

    return ScatterRenderer;

  })(Component);

  _.extend(ScatterRenderer.prototype.defaults, {
    data_source: null,
    xmapper: null,
    ymapper: null,
    xfield: null,
    yfield: null,
    colorfield: null,
    mark: 'circle'
  });

  _.extend(ScatterRenderer.prototype.display_defaults, {
    radius: 3
  });

  ScatterRenderers = (function(_super) {

    __extends(ScatterRenderers, _super);

    ScatterRenderers.name = 'ScatterRenderers';

    function ScatterRenderers() {
      return ScatterRenderers.__super__.constructor.apply(this, arguments);
    }

    ScatterRenderers.prototype.model = ScatterRenderer;

    return ScatterRenderers;

  })(Backbone.Collection);

  "Convenience plotting functions";


  Bokeh.scatter_plot = function(parent, data_source, xfield, yfield, color_field, mark, colormapper) {
    var color_mapper, plot_model, scatter_attrs, scatter_plot, source_name, xaxis, xmapper, yaxis, ymapper;
    if (_.isUndefined(mark)) {
      mark = 'circle';
    }
    if (_.isUndefined(color_field)) {
      color_field = null;
    }
    if (_.isUndefined(color_mapper) && color_field) {
      color_mapper = Collections['DiscreteColorMapper'].create({
        data_range: data_source.get_discrete_range(color_field)
      }).ref();
    }
    source_name = data_source.get('name');
    plot_model = Collections['Plot'].create({
      data_sources: {
        source_name: data_source.ref()
      },
      parent: parent
    });
    xmapper = Collections['LinearMapper'].create({
      data_range: data_source.get_cont_range(xfield),
      screen_range: plot_model.xrange.ref()
    });
    ymapper = Collections['LinearMapper'].create({
      data_range: data_source.get_cont_range(yfield),
      screen_range: plot_model.yrange.ref()
    });
    scatter_attrs = scatter_plot = Collections["ScatterRenderer"].create({
      data_source: data_source.ref(),
      xfield: xfield,
      yfield: yfield,
      color_field: color_field,
      color_mapper: color_mapper,
      mark: mark,
      xmapper: xmapper.ref(),
      ymapper: ymapper.ref(),
      parent: plot_model.ref()
    });
    xaxis = Collections['D3LinearAxis'].create({
      'orientation': 'bottom',
      'mapper': xmapper.ref(),
      'parent': plot_model.ref()
    });
    yaxis = Collections['D3LinearAxis'].create({
      'orientation': 'left',
      'mapper': ymapper.ref(),
      'parent': plot_model.ref()
    });
    return plot_model.set({
      'renderers': [scatter_plot.ref()],
      'axes': [xaxis.ref(), yaxis.ref()]
    });
  };

  Bokeh.register_collection('Plot', new Plots);

  Bokeh.register_collection('ScatterRenderer', new ScatterRenderers);

  Bokeh.register_collection('ObjectArrayDataSource', new ObjectArrayDataSources);

  Bokeh.register_collection('Range1d', new Range1ds);

  Bokeh.register_collection('LinearMapper', new LinearMappers);

  Bokeh.register_collection('D3LinearAxis', new D3LinearAxes);

  Bokeh.register_collection('DiscreteColorMapper', new DiscreteColorMappers);

  Bokeh.register_collection('FactorRange', new FactorRanges);

  Bokeh.register_collection('GridPlotContainer', new GridPlotContainers);

  Bokeh.Collections = Collections;

  Bokeh.HasReference = HasReference;

  Bokeh.HasParent = HasParent;

  Bokeh.ObjectArrayDataSource = ObjectArrayDataSource;

  Bokeh.Plot = Plot;

  Bokeh.Component = Component;

  Bokeh.ScatterRenderer = ScatterRenderer;

  Bokeh.BokehView = BokehView;

  Bokeh.PlotView = PlotView;

  Bokeh.ScatterRendererView = ScatterRendererView;

  Bokeh.HasProperties = HasProperties;

  Bokeh.D3LinearAxis = D3LinearAxis;

  Bokeh.GridPlotContainerView = GridPlotContainerView;

  Bokeh.GridPlotContainers = GridPlotContainers;

  Bokeh.GridPlotContainer = GridPlotContainer;

}).call(this);
import json
import numpy as np

from bokeh.plotting import *
from bokeh.objects import HoverTool, ColumnDataSource
from bokeh.sampledata.les_mis import data

from collections import OrderedDict

# EXERCISE: try out different sort orders for the names
nodes = data['nodes']
names = [node['name'] for node in sorted(data['nodes'], key=lambda x: x['group'])]

# store the links information in numpy
N = len(nodes)
counts = np.empty((N, N))
for link in data['links']:
    counts[link['source'], link['target']] = link['value']
    counts[link['target'], link['source']] = link['value']

# We will use these colors to color each group by a different color
colormap = [
    "#444444", "#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99",
    "#e31a1c", "#fdbf6f", "#ff7f00", "#cab2d6", "#6a3d9a"
]

# set up some data to plot! We will need to have values for every pair of names. The
# co-occurrence count for a given pair of names is in `count[i,j]`. The strategy is
# to color each rect by the group, and set its alpha based on the count.
xname = []
yname = []
color = []
alpha = []
for i, n1 in enumerate(nodes):
    for j, n2 in enumerate(nodes):
        xname.append(n1['name'])
        yname.append(n2['name'])

        a = min(counts[i,j]/4.0, 0.9) + 0.1
        alpha.append(a)

        if n1['group'] == n2['group']:
            color.append(colormap[n1['group']])
        else:
            color.append('lightgrey')

# EXERCISE: output static HTML file

# EXERCISE: create a ColumnDataSource to hold the xnames, ynames, colors, alphas,
# and counts. NOTE: the counts array is 2D and will need to be flattened

# EXERCISE: create a new figure

# EXERCISE: use the `rect` renderer to render a categorical heatmap of all the
# data. Experiment with the widths and heights (use categorical percentage
# unite) as well as colors and alphas. Add hover and resize tools.

# EXERCISE: use grid(), axis(), etc. to style the plot. Some suggestions:
#   - remove the axis and grid lines
#   - remove the major ticks
#   - make the tick labels smaller
#   - set the x-axis orientation to vertical, or angled

# EXERCISE configure the  hover tool to display both names as well as
# the count value as tooltips
hover = [t for t in curplot().tools if isinstance(t, HoverTool)][0]
hover.tooltips = OrderedDict([
    # fill me in
])

show()      # show the plot

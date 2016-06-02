WEBAPP_SRC=/Development/workspaces/extjs/extjs-practicum/src/main/webapp
rm -rfv $WEBAPP_SRC/archive $WEBAPP_SRC/classic* $WEBAPP_SRC/modern* $WEBAPP_SRC/cache* $WEBAPP_SRC/index*
sencha app build classic production
FONT_AWESOME=/Development/Fonts/font-awesome-4.6.3
FONT_AWESOME_DEST=$WEBAPP_SRC/resources/font-awesome/fonts
mkdir -p $FONT_AWESOME_DEST
cp -r $FONT_AWESOME/fonts/* $FONT_AWESOME_DEST
EXTJS_THEME_DIR=./ext/classic/theme-triton
FONTS_DEST=$WEBAPP_SRC/resources/fonts
mkdir -p $FONTS_DEST
cp -r $EXTJS_THEME_DIR/resources/fonts/* $FONTS_DEST
cp -r classic/resources/images/* $WEBAPP_SRC/classic/resources/images/
LOCALES_DEST=$WEBAPP_SRC/classic/resources/locales
mkdir -p $LOCALES_DEST
cp -rv ext/build/classic/locale/* $LOCALES_DEST
rm -fv $LOCALES_DEST/*-debug*
